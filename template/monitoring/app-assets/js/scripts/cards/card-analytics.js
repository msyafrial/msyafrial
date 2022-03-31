/*=========================================================================================
    File Name: card-statistics.js
    Description: Card-statistics page content with Apexchart Examples
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

var kecepatan=10;
var maxKecepatan=3000;

$(window).on("load", function () {


    var $primary = '#7367F0';
    var $danger = '#EA5455';
    var $warning = '#FF9F43';
    var $info = '#00cfe8';
    var $success = '#00db89';
    var $primary_light = '#9c8cfc';
    var $warning_light = '#FFC085';
    var $danger_light = '#f29292';
    var $info_light = '#1edec5';
    var $strok_color = '#b9c3cd';
    var $label_color = '#e7eef7';
    var $purple = '#df87f2';
    var $white = '#fff';


    


    
    // Support Tracker Chart
    // -----------------------------

    var supportChartoptions = {
        chart: {
            height: 270,
            type: 'radialBar',
            sparkline: {
                enabled: false,
            }
        },
        plotOptions: {
            radialBar: {
                size: 150,
                offsetY: 20,
                startAngle: -150,
                endAngle: 150,
                hollow: {
                    size: '65%',
                },
                track: {
                    background: $white,
                    strokeWidth: '100%',

                },
                dataLabels: {
                    name:{
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 40
                      },
                    value: {
                        offsetY: -10,
                        color: '#99a2ac',
                        fontSize: '2rem',
                        formatter: function (val) {
                            return kecepatan + "Rpm";
                          }
                        
                    }
                }
            },
        },
        colors: [$danger],
        fill: {
            type: 'gradient',
            gradient: {
                // enabled: true,
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: [$primary],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            },
        },
        stroke: {
            dashArray: 8
        },
        series: [kecepatan],
        labels: ['Motor Speed'],
    }
    var supportChart = new ApexCharts(
        document.querySelector("#support-tracker-chart"),
        supportChartoptions
    );
    supportChart.render();




    var Rpm = database.ref('/ESP_Send_Data/rpm/readRpm');
    Rpm.on('value', (snapshot) => {
    const data = snapshot.val();
    if(data>maxKecepatan){
    maxKecepatan=data;
    }
    kecepatan=data;
    const persentaseKecepatan=(data/maxKecepatan)*100;
    supportChart.updateSeries([persentaseKecepatan]);
    });
    var speedMotor=[] ;
   
    var counter = 0;
    var categoriesInputs = 0;
    var speedControl = database.ref('/ESP_Receive_Data/rpm/writeRpm');
    speedControl.on('value', (snapshot) => {
            const data = snapshot.val();
            var rangeValueElement = document.getElementsByClassName("Speed-slider");
            var value = document.getElementById("speed");
            rangeValueElement.range.value = data;
            value.innerHTML = data + "%";
            speedMotor.splice(0,0,data);
            speedMotor.splice(200,1)
            // console.log(speedMotor)
            
            
            revenueChart.updateOptions({
                series: [{
                    name: "RPM",
                    data: speedMotor}],
                xaxis: {
                catagories: categoriesInputs
                }
            });

        })
   
    var voltage = document.getElementById('voltage');
    var current = document.getElementById('current');
    var frequency = document.getElementById('frequency');
    var pf = document.getElementById('pf');
    var pw = document.getElementById('power');
    var energy = document.getElementById('energy');

    var power = database.ref('/ESP_Send_Data/power/');
    power.on('value', (snapshot) => {
        const data = snapshot.val();
        voltage.innerHTML=data.voltage;
        current.innerHTML=data.current;
        frequency.innerHTML=data.frequency;
        pf.innerHTML=data.powerFactor;
        pw.innerHTML=data.power;
        energy.innerHTML=data.energy;
    });

    var maxTemp = document.getElementById('maxTemp');
    var avgTemp = document.getElementById('avgTemp');
    var temp;
    var temp = database.ref('/ESP_Send_Data/temp/');
    temp.on('value', (snapshot) => {
        const data = snapshot.val();
        temp=data.temp;
        maxTemp.innerHTML=data.maxTemp;
        avgTemp.innerHTML=data.avgTemp;
        tempChart.updateSeries([temp]);

    });



    // Revenue  Chart
    // -----------------------------

    var revenueChartoptions = {
        chart: {
            height: 260,
            toolbar: {
                show: false
            },
            type: 'line',
        },
        stroke: {
            curve: 'smooth',
            dashArray: [0, 0],
            width: [4, 2],
        },
        grid: {
            borderColor: $label_color,
        },
        legend: {
            show: false,
        },
        colors: [$danger_light, $strok_color],

        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                inverseColors: false,
                gradientToColors: [$primary, $strok_color],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 0,
            hover: {
                size: 5
            }
        },
        xaxis: {
            labels: {
                show:false,
                style: {
                    colors: $strok_color,
                }
            },
            axisTicks: {
                show: false,
            },
            categories: [],
            axisBorder: {
                show: false,
            },
            tickPlacement: 'off',
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                style: {
                    color: $strok_color,
                },
                formatter: function (val) {
                    return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
                }
            }
        },
        tooltip: {
            x: {
                show: false
            }
        },
        series: [{
                name: "This Month",
                data: [speedMotor]
            },

        ],

    }

    var revenueChart = new ApexCharts(
        document.querySelector("#revenue-chart"),
        revenueChartoptions
    );

    revenueChart.render();


    // Goal Overview  Chart
    // -----------------------------

    var tempChartoptions = {
        chart: {
          height: 270,
          type: 'radialBar',
          sparkline: {
              enabled: true,
          },
          dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1
          },
        },
        colors: [$success],
        plotOptions: {
            radialBar: {
                size: 120,
                startAngle: -150,
                endAngle: 150,
                hollow: {
                    size: '77%',
                },
                track: {
                    background: $strok_color,
                    strokeWidth: '50%',
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 18,
                        color: $strok_color,
                        fontSize: '4rem',
                        formatter: function (val) {
                            return val + "°C";
                          }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#00b5b5'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            },
        },
        series: [83],
        stroke: {
          lineCap: 'round'
        },
  
      }
  
      var tempChart = new ApexCharts(
        document.querySelector("#temp-overview-chart"),
        tempChartoptions
      );
  
      tempChart.render();
  



});

function handleMouseMove(value) {
    const rangeValueElement = document.getElementById("speed")
    rangeValueElement.innerHTML = value + "%"
    firebase.database().ref('ESP_Receive_Data/rpm/').update({writeRpm:parseInt(value)});
  }

    // var slider1 = document.getElementById("range")
    var speedMessage = document.getElementById("speedMessage")
    var value = document.getElementById("slideSpeed")
    var controlState = database.ref('ESP_Send_Data/control/state');
    controlState.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data==0){
        speedMessage.style.display = 'block'
        // slider1.style.visibility = "hidden";
        value.style.display = 'none';
    }
    else{
        // slider1.style.visibility = "visible";
        value.style.display = 'flex';
        speedMessage.style.display = 'none';
    }
    });

    setInterval(function(){ 
        //this code runs every second 
        var timestamp = database.ref('/time/timestamp');
        timestamp.once('value', (snapshot) => {
        const data = snapshot.val();
        var minutesToAdd=30;
        var currentDate = new Date();
        var waktu = (currentDate.getTime()-data);
        if (waktu>=30000){
            firebase.database().ref('ESP_Send_Data/control').update({state:0});    
        }
        //  console.log(waktu);
        });
    }, 1000);