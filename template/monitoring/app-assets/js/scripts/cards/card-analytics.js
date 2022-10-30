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
    var grid_line_color = '#dae1e7';


    

    
    
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
            // value.innerHTML = data + "%";
            value.innerHTML = data;
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
   
    var voltageIn = document.getElementById('voltageIn');
    var currentIn = document.getElementById('currentIn');
    var frequencyIn = document.getElementById('frequencyIn');
    var pfIn = document.getElementById('pfIn');
    var pwIn = document.getElementById('PowerIn');
    var energyIn = document.getElementById('energyIn');

    var powerIn = database.ref('/ESP_Send_Data/power/');
    powerIn.on('value', (snapshot) => {
        const data = snapshot.val();
        voltageIn.innerHTML=data.voltage.toFixed(1);
        currentIn.innerHTML=data.current.toFixed(2);
        // frequencyIn.innerHTML=Math.round(data.frequency);
        pfIn.innerHTML=data.powerFactor.toFixed(1);
        pwIn.innerHTML=data.power.toFixed(1);
        // energyIn.innerHTML=data.energy.toFixed(2);

    });


    var voltageOut = document.getElementById('voltageOut');
    var currentOut = document.getElementById('currentOut');
    var pfOut = document.getElementById('pfOut');
    var pwOut = document.getElementById('PowerOut');

    var powerOut = database.ref('/ESP8266_Send_Data/power/');
    powerOut.on('value', (snapshot) => {
        const data = snapshot.val();
        voltageOut.innerHTML=data.voltage.toFixed(1);
        currentOut.innerHTML=data.current.toFixed(2);
        pfOut.innerHTML=data.powerFactor.toFixed(1);
        pwOut.innerHTML=data.power.toFixed(1);
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
        if (temp>80) {
            tempChart.updateOptions({
                colors: [$danger]
              })
        } 
        else if (temp>70){
            tempChart.updateOptions({
                colors: [$warning]
              })
        }
        else {
            
            tempChart.updateOptions({
                colors: ['#00b5b5']
            })
        }



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
        colors: ['#00b5b5'],
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
            // type: 'gradient',
            // gradient: {
            //     shade: 'dark',
            //     type: 'horizontal',
            //     shadeIntensity: 0.5,
            //     gradientToColors: ['#00b5b5'],
            //     inverseColors: true,
            //     opacityFrom: 1,
            //     opacityTo: 1,
            //     stops: [0, 50]
            // },
            
        },
        series: [0],
        stroke: {
          lineCap: 'round'
        },
  
      }
  
      var tempChart = new ApexCharts(
        document.querySelector("#temp-overview-chart"),
        tempChartoptions
      );
  
      tempChart.render();
    //   startTime();

    


  // Create the chart
 const speedgrafik= Highcharts.stockChart('container', {
    chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 300,
        // animation: false,
        // marginRight:0,
        marginLeft:30,
        animation:{
            duration:300
        },
        // spacingBottom:0,
        // spacingTop:0,
        // borderWidth:0,
        //  marginTop:0,
        // marginBottom:0,
        events: {
            load: function () {
                // set up the updating of the chart each second
                var series = this.series[0];
                var Switch4status=false;
                setInterval(function () {
                if(document.getElementById('customSwitch4').checked){
                    var readSpeed = database.ref('/ESP_Send_Data/rpm/readRpm');
                    readSpeed.once('value', (snapshot) => {
                        var x = (new Date()).getTime();
                    y = parseInt(snapshot.val());
                    series.addPoint([x, y],true,true);
                    })
                }
                else{
                    
                }
               }, 500);
                
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: 'white',
                fontSize:14
            }
        },
        min: 0,
        max: 4000,
        startOnTick: false,
        endOnTick: false
      },
    xAxis:{
        labels: {
            style: {
                color: 'white',
                fontSize:12
            },
        // min:new Date().getTime()-30000,
        // max:new Date().getTime() 
        },
        

        
    },
    time: {
        useUTC: false
    },
  navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        
        rangeSelector: {
        enabled: false,
        },
    title: {
        display: false
    },
    exporting: {
        enabled: false
    },

    series: [{
        name: '',
        type: 'spline',
        // animation: {
        //     duration: 0
        // },
        data: 
        (function () {
            // generate an array of random data
            var data = [],			
                time = (new Date()).getTime(),
                i;

            for (i = -100; i <= 0; i += 1) {
                data.push([
                    time + i * 200,
                    0
                    
                ]);
            }
            console.log(data);
            return data;
        }())
    }]
});




setInterval(function onlineStatus(){ 
    //this code runs every second 
    var timestamp = database.ref('/time/timestamp');
    timestamp.once('value', (snapshot) => {
    const data = snapshot.val();
    var currentDate = new Date();
    var waktu = (currentDate.getTime()-data);
    if (waktu>=5000){
        document.getElementById("online-status").classList.replace('bg-success', 'bg-danger');
        document.getElementById("online-status-text").textContent='Offline';
          firebase.database().ref('ESP_Send_Data').update({
            'control/state':0,
            'temp/temp':0,
            'temp/maxTemp':0,
            'temp/avgTemp':0,
            'power/current':0,
            'power/voltage':0,
            'power/frequency':0,
            'power/power':0,
            'power/energy':0,
            'power/powerFactor':0,
            'rpm/readRpm':0
          });

        //   firebase.database().ref('ESP8266_Send_Data').update({

        //     'power/current':0,
        //     'power/voltage':0,
        //     'power/power':0,
        //     'power/powerFactor':0,
        //   });

          document.getElementById('customSwitch4').checked=false;
          document.getElementById('customSwitch4').disabled=true;

    }
    else{
        document.getElementById("online-status").classList.replace('bg-danger', 'bg-success');
        document.getElementById("online-status-text").textContent='Online';
        document.getElementById('customSwitch4').disabled=false;
    }
    });
}, 1000);

// document.getElementById('customSwitch4').addEventListener('change', () => {
//     if(document.getElementById('customSwitch4').checked){
//         speedgrafik.update({
//         data: (function () {
//             // generate an array of random data
//             var data = [],			
//                 time = (new Date()).getTime(),
//                 i;

//             for (i = -100; i <= 0; i += 1) {
//                 data.push([
//                     time + i * 200,
//                     0
                    
//                 ]);
//             }
//             console.log(data);
//             return data;
//         }())
//     })
// };
// });

});

function handleMouseMove(value) {
    const rangeValueElement = document.getElementById("speed")
    // rangeValueElement.innerHTML = value + "%"
    rangeValueElement.innerHTML = value
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

   



    // function startTime() {
    //     const today = new Date();
    //     let h = today.getHours();
    //     let m = today.getMinutes();
    //     let s = today.getSeconds();
    //     m = checkTime(m);
    //     s = checkTime(s);
    //     document.getElementById('jam').innerHTML =  h + ":" + m + ":" + s;
    //     setTimeout(startTime, 1000);
    //   }
      
    //   function checkTime(i) {
    //     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    //     return i;
    //   }

    // function updateBarGraph(chart, label, color, data) {
    //     chart.data.datasets.pop();
    //     chart.data.datasets.push({
    //         label: label,
    //         backgroundColor: color,
    //         data: data
    //     });
    //     chart.update();
    // }
    // /*Updating the bar chart with updated data in every second. */
    // setInterval(function () {
    //       updatedDataSet = [Math.random(), Math.random(), Math.random(), Math.random()];
    //     updateBarGraph(barChart,'Prediction', colouarray, updatedDataSet);
    //   }, 1000);

    