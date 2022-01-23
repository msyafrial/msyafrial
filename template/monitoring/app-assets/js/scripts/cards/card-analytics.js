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


    // Session Chart
    // ----------------------------------

    var sessionChartoptions = {
        chart: {
            type: 'donut',
            height: 315,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        series: [58.6, 34.9, 6.5],
        legend: {
            show: false
        },
        comparedResult: [2, -3, 8],
        labels: ['Desktop', 'Mobile', 'Tablet'],
        stroke: {
            width: 0
        },
        colors: [$primary, $warning, $danger],
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [$primary_light, $warning_light, $danger_light]
            }
        }
    }

    var sessionChart = new ApexCharts(
        document.querySelector("#session-chart"),
        sessionChartoptions
    );

    sessionChart.render();

    // Product Order Chart
    // -----------------------------

    var orderChartoptions = {
        chart: {
            height: 325,
            type: 'radialBar',
        },
        colors: [$primary, $warning, $danger],
        fill: {
            type: 'gradient',
            gradient: {
                // enabled: true,
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: [$primary_light, $warning_light, $danger_light],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            },
        },
        stroke: {
            lineCap: 'round'
        },
        plotOptions: {
            radialBar: {
                size: 150,
                hollow: {
                    size: '20%'
                },
                track: {
                    strokeWidth: '100%',
                    margin: 15,
                },
                dataLabels: {
                    name: {
                        fontSize: '18px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',

                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 42459
                        }
                    }
                }
            }
        },
        series: [70, 52, 26],
        labels: ['Finished', 'Pending', 'Rejected'],

    }

    var orderChart = new ApexCharts(
        document.querySelector("#product-order-chart"),
        orderChartoptions
    );

    orderChart.render();


    // Customer Chart
    // -----------------------------

    var customerChartoptions = {
        chart: {
            type: 'pie',
            height: 325,
            dropShadow: {
                enabled: false,
                blur: 5,
                left: 1,
                top: 1,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        labels: ['New', 'Returning', 'Referrals'],
        series: [690, 258, 149],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            width: 5
        },
        colors: [$primary, $warning, $danger],
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [$primary_light, $warning_light, $danger_light]
            }
        }
    }

    var customerChart = new ApexCharts(
        document.querySelector("#customer-chart"),
        customerChartoptions
    );

    customerChart.render();

    // Sales Chart
    // -----------------------------

    var salesChartoptions = {
        chart: {
            height: 300,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 8,
                left: 1,
                top: 1,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        toolbar: {
            show: false
        },
        series: [{
            name: 'Sales',
            data: [90, 50, 86, 40, 100, 20],
        }, {
            name: 'Visit',
            data: [70, 75, 70, 76, 20, 85],
        }],
        stroke: {
            width: 0
        },
        colors: [$primary, $info],
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: [$strok_color, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                    connectorColors: 'transparent'
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#9f8ed7', $info_light],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 0,
        },
        legend: {
            show: false,
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        dataLabels: {
            style: {
                colors: [$strok_color, $strok_color, $strok_color, $strok_color, $strok_color, $strok_color]
            }
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },

    }

    var salesChart = new ApexCharts(
        document.querySelector("#sales-chart"),
        salesChartoptions
    );

    salesChart.render();


    
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


    
    var Rpm = database.ref('rpm/readRpm');
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
    var speedControl = database.ref('rpm/writeRpm');
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
                    name: "This Month",
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

    var power = database.ref('power/');
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
    var temp = database.ref('temp/');
    temp.on('value', (snapshot) => {
        const data = snapshot.val();
        temp=data.temp;
        maxTemp.innerHTML=data.max;
        avgTemp.innerHTML=data.avg;
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
  
 // Goal Overview  Chart
    // -----------------------------

    var currentChartoptions = {
        chart: {
            height:350,
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
                size: 143,
                startAngle: 0,
                endAngle: 360,
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
                            return kecepatan + "A";
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
        series: [100],
        stroke: {
            lineCap: 'round'
        },

    }

    var currentChart = new ApexCharts(
        document.querySelector("#current-chart"),
        currentChartoptions
    );

    currentChart.render();

 // Goal Overview  Chart
    // ---------    --------------------

    var frequencyChartoptions = {
        chart: {
            height:350,
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
                size: 143,
                startAngle: 0,
                endAngle: 360,
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
                            return kecepatan + "Hz";
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
        series: [100],
        stroke: {
            lineCap: 'round'
        },

    }

    var frequencyChart = new ApexCharts(
        document.querySelector("#frequency-chart"),
        frequencyChartoptions
    );

    frequencyChart.render();


    // Average Session Chart
    // ----------------------------------

    var avgsessionChartoptions = {
        chart: {
            type: 'bar',
            height: 200,
            sparkline: {
                enabled: true
            },
            toolbar: {
                show: false
            },
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        colors: [$label_color, $label_color, $primary, $label_color, $label_color, $label_color],
        series: [{
            name: 'Sessions',
            data: [75, 125, 225, 175, 125, 75, 25]
        }],
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },

        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
                endingShape: 'rounded'
            }
        },
        tooltip: {
            x: {
                show: false
            }
        },
        xaxis: {
            type: 'numeric',
        }
    }

    var avgsessionChart = new ApexCharts(
        document.querySelector("#avg-session-chart"),
        avgsessionChartoptions
    );

    avgsessionChart.render();

    // Sales  Chart
    // -----------------------------

    var salesavgChartoptions = {
        chart: {
            height: 270,
            toolbar: {
                show: false
            },
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 20,
                left: 2,
                blur: 6,
                opacity: 0.20
            },
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        grid: {
            borderColor: $label_color,
        },
        legend: {
            show: false,
        },
        colors: [$purple],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                inverseColors: false,
                gradientToColors: [$primary],
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
                style: {
                    colors: $strok_color,
                }
            },
            axisTicks: {
                show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false,
            },
            tickPlacement: 'on'
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
            name: "Sales",
            data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295]
        }],

    }

    var salesavgChart = new ApexCharts(
        document.querySelector("#sales-line-chart"),
        salesavgChartoptions
    );

    salesavgChart.render();

    // Client Retention Chart
    // ----------------------------------

    var retentionChartoptions = {
        chart: {
            stacked: true,
            type: 'bar',
            toolbar: {
                show: false
            },
            height: 290,
        },
        plotOptions: {
            bar: {
                columnWidth: '10%'
            }
        },
        colors: [$primary, $danger],
        series: [{
            name: 'New Clients',
            data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
        }, {
            name: 'Retained Clients',
            data: [-144, -155, -141, -167, -122, -143, -158, -107, -126, -131, -140, -137]
        }],
        grid: {
            borderColor: $label_color,
            padding: {
                left: 0,
                right: 0
            }
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 0,
            fontSize: '14px',
            markers: {
                radius: 50,
                width: 10,
                height: 10,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            labels: {
                style: {
                    colors: $strok_color,
                }
            },
            axisTicks: {
                show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                style: {
                    color: $strok_color,
                }
            }
        },
        tooltip: {
            x: {
                show: false
            }
        },
    }

    var retentionChart = new ApexCharts(
        document.querySelector("#client-retention-chart"),
        retentionChartoptions
    );

    retentionChart.render();

});

function handleMouseMove(value) {
    const rangeValueElement = document.getElementById("speed")
    rangeValueElement.innerHTML = value + "%"
    firebase.database().ref('rpm/').update({writeRpm:value});
  }

    // var slider1 = document.getElementById("range")
    var speedMessage = document.getElementById("speedMessage")
    var value = document.getElementById("slideSpeed")
    var controlState = database.ref('motor/control-state');
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