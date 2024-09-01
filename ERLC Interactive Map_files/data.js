var icons = {
    speedcamera: L.icon({
        iconUrl: "Icons/speed-camera.png",
        iconSize: [50, 50],
    }),
    trafficlight: L.icon({
        iconUrl: "Icons/traffic-light.png",
        iconSize: [50, 50],
    }),
    atm: L.icon({
        iconUrl: "Icons/atm.png",
        iconSize: [50, 50],
    }),
    bus: L.icon({
        iconUrl: "Icons/bus.png",
        iconSize: [50, 50],
    }),
    firehydrant: L.icon({
        iconUrl: "Icons/fire-hydrant.png",
        iconSize: [50, 50],
    }),
    evcharger: L.icon({
        iconUrl: "Icons/ev-charger.png",
        iconSize: [50, 50],
    }),
    newspaper: L.icon({
        iconUrl: "Icons/newspaper.png",
        iconSize: [50, 50],
    }),
    maildropbox: L.icon({
        iconUrl: "Icons/mail-drop-box.png",
        iconSize: [50, 50],
    }),
    cashregister: L.icon({
        iconUrl: "Icons/cash-register.png",
        iconSize: [50, 50],
    }),
    trafficcamera: L.icon({
        iconUrl: "Icons/traffic-camera.png",
        iconSize: [50, 50],
    }),
    salevehicle: L.icon({
        iconUrl: "Icons/sale-vehicle.png",
        iconSize: [50, 50],
    }),
    stolenvehicle: L.icon({
        iconUrl: "Icons/stolen-vehicle.png",
        iconSize: [50, 50],
    }),
    firepullbox: L.icon({
        iconUrl: "Icons/fire-pull-box.png",
        iconSize: [50, 50],
    }),
    firecontrolpanel: L.icon({
        iconUrl: "Icons/fire-control-panel.png",
        iconSize: [50, 50],
    }),
    shutoffvalve: L.icon({
        iconUrl: "Icons/shut-off-valve.png",
        iconSize: [50, 50],
    }),
    ice: L.icon({
        iconUrl: "Icons/ice.png",
        iconSize: [50, 50],
    }),
    saferobbery: L.icon({
        iconUrl: "Icons/safe-robbery.png",
        iconSize: [45, 45],
    }),
    gaspump: L.icon({
        iconUrl: "Icons/gas-pump.png",
        iconSize: [50, 50],
    }),
    watertower: L.icon({
        iconUrl: "Icons/water-tower.png",
        iconSize: [50, 50],
    }),
    bunker: L.icon({
        iconUrl: "Icons/bunker.png",
        iconSize: [50, 50],
    }),
    criminalhideout: L.icon({
        iconUrl: "Icons/criminal-hideout.png",
        iconSize: [50, 50],
    }),
    // clovercoins: L.icon({
    //     iconUrl: "Icons/clover-coin.png",
    //     iconSize: [50, 50],
    // }),
    // greenguardian: L.icon({
    //     iconUrl: "Icons/green-guardian.png",
    //     iconSize: [50, 50],
    // }),
    trafficlight: L.icon({
        iconUrl: "Icons/traffic-light.png",
        iconSize: [50, 50],
    }),
	highwaymessageboard: L.icon({
        iconUrl: "Icons/highway-message-board.png",
        iconSize: [50, 50],
    }),
    highwaybillboard: L.icon({
        iconUrl: "Icons/highway-billboard.png",
        iconSize: [50, 50],
    }),
	firewatchtower: L.icon({
        iconUrl: "Icons/fire-watch-tower.png",
        iconSize: [50, 50],
    }),
	celltower: L.icon({
        iconUrl: "Icons/cell-tower.png",
        iconSize: [50, 50],
    }),
	pylon: L.icon({
      iconUrl: "Icons/pylon.png",
      iconSize: [50, 50],
  }),
  fueltruckresupply: L.icon({
		iconUrl: "Icons/fuel-truck-resupply.png",
		iconSize: [50, 50],
  }),
  gasstationresupply: L.icon({
		iconUrl: "Icons/gas-station-resupply.png",
		iconSize: [50, 50],
  }),
  dumpster: L.icon({
		iconUrl: "Icons/dumpster.png",
		iconSize: [50, 50],
  }),
  speedlimitsign20: L.icon({
		iconUrl: "Icons/speed-limit-sign-20.png",
		iconSize: [50, 50],
  }),
  speedlimitsign25exit: L.icon({
		iconUrl: "Icons/speed-limit-sign-25-exit.png",
		iconSize: [50, 50],
  }),
  speedlimitsign40: L.icon({
		iconUrl: "Icons/speed-limit-sign-40.png",
		iconSize: [50, 50],
  }),
  speedlimitsign45: L.icon({
		iconUrl: "Icons/speed-limit-sign-45.png",
		iconSize: [50, 50],
  }),
  speedlimitsign50: L.icon({
		iconUrl: "Icons/speed-limit-sign-50.png",
		iconSize: [50, 50],
  }),
  speedlimitsign55: L.icon({
		iconUrl: "Icons/speed-limit-sign-55.png",
		iconSize: [50, 50],
  }),
  speedlimitsign65: L.icon({
		iconUrl: "Icons/speed-limit-sign-65.png",
		iconSize: [50, 50],
  }),
  speedlimitsign75: L.icon({
		iconUrl: "Icons/speed-limit-sign-75.png",
		iconSize: [50, 50],
  }),
  speedlimitsign75gone: L.icon({
		iconUrl: "Icons/speed-limit-sign-75-gone.png",
		iconSize: [50, 50],
  }),
  stopsign: L.icon({
		iconUrl: "Icons/stop-sign.png",
		iconSize: [50, 50],
  }),
  yieldsign: L.icon({
		iconUrl: "Icons/yield-sign.png",
		iconSize: [50, 50],
  }),
  bountyman: L.icon({
		iconUrl: "Icons/bounty-man.png",
		iconSize: [50, 50],
  }),
  bigfoot: L.icon({
		iconUrl: "Icons/bigfoot.png",
		iconSize: [50, 50],
  }),
  ecuhack: L.icon({
		iconUrl: "Icons/ecu-hack.png",
		iconSize: [50, 50],
  }),
}

const lists = [0, 1, 2, 3]
const removed_lists = [100]

var layers = [
    {
        id: 0,
        group_id: 0,
        name: "Speed Cameras",
        icon: "Icons/speed-camera.png",
        layer: L.layerGroup([
            L.marker([277, 670], {icon: icons.speedcamera}),
            L.marker([1040, 600], {icon: icons.speedcamera}),
            L.marker([656.265308, 162.45769], {icon: icons.speedcamera}),
            L.marker([888.265943, 1272.354786], {icon: icons.speedcamera}),
            L.marker([199.390034, 732.21996], {icon: icons.speedcamera}),
            L.marker([483.140253, 1089.96], {icon: icons.speedcamera}),
            L.marker([505.886193, 1122.090436], {icon: icons.speedcamera}),
            // L.marker([1197.349342, 1080.923149], {icon: icons.speedcamera}),
            L.marker([1185.014816, 1046.453632], {icon: icons.speedcamera}),
            L.marker([1055.757819, 792.105179], {icon: icons.speedcamera}),
            L.marker([971.170909, 1191.705633], {icon: icons.speedcamera}),
            L.marker([1033.837651, 1174.954787], {icon: icons.speedcamera}),
            L.marker([532.138141, 933.469894], {icon: icons.speedcamera}),
            L.marker([823.261358, 835.093267], {icon: icons.speedcamera}),
            L.marker([924.870689, 383.894667], {icon: icons.speedcamera}),
            L.marker([498.334465, 453.87814], {icon: icons.speedcamera}),
            L.marker([293.6875, 426.8125], {icon: icons.speedcamera}),
            L.marker([349.75, 783.125], {icon: icons.speedcamera}),
        ]),
    },
    {
        id: 1,
        group_id: 0,
        name: "ATMs",
        icon: "Icons/atm.png",
        layer: L.layerGroup([
            L.marker([530.011495, 381.610061], {icon: icons.atm}),
            L.marker([425.284547, 818.621099], {icon: icons.atm}),
            L.marker([293.573511, 261.659735], {icon: icons.atm}),
            L.marker([189.936413, 275.71989], {icon: icons.atm}),
            L.marker([297.391488, 409.358434], {icon: icons.atm}),
            L.marker([375.40513, 441.87878], {icon: icons.atm}),
            L.marker([316.132188, 847.078427], {icon: icons.atm}),
            L.marker([828.625, 742], {icon: icons.atm}),
            L.marker([1026.473734, 1239.87924], {icon: icons.atm}),
            L.marker([988.631612, 1253.087897], {icon: icons.atm}),
            L.marker([892.09777, 1219.920447], {icon: icons.atm}),
        ])
    },
    {
        id: 2,
        group_id: 0,
        name: "Bus Stops",
        icon: "Icons/bus.png",
        layer: L.layerGroup([
            L.marker([458.442648, 338.019389], {icon: icons.bus}),
            L.marker([441.891927, 523.732327], {icon: icons.bus}),
            L.marker([282.76262, 319.806551], {icon: icons.bus}),
            L.marker([206.141543, 425.229626], {icon: icons.bus}),
            L.marker([451.0155, 796.969244], {icon: icons.bus}),
            L.marker([327.082623, 858.621651], {icon: icons.bus}),
            L.marker([944.889732, 1187.603357], {icon: icons.bus}),
            L.marker([997.133258, 1328.579337], {icon: icons.bus}),
            L.marker([1018.011572, 1240.102013], {icon: icons.bus}),
            L.marker([407.735448, 422.849855], {icon: icons.bus}),
	    L.marker([164.196266, 363.277022], { icon: icons.bus }),
        ])
    },
    {
        id: 3,
        group_id: 0,
        name: "Fire Hydrants",
        icon: "Icons/fire-hydrant.png",
        layer: L.layerGroup([
            L.marker([421.793097, 418.27634], {icon: icons.firehydrant}),
            L.marker([386.625, 469.5], {icon: icons.firehydrant}),
            L.marker([341.75, 420.125], {icon: icons.firehydrant}),
            L.marker([346.5, 298.875], {icon: icons.firehydrant}),
            L.marker([504.75, 715.875], {icon: icons.firehydrant}),
            L.marker([321.75, 867.625], {icon: icons.firehydrant}),
            L.marker([483.25, 362.125], {icon: icons.firehydrant}),
            L.marker([524.125, 374], {icon: icons.firehydrant}),
            L.marker([508.25, 455], {icon: icons.firehydrant}),
            L.marker([559.25, 472.375], {icon: icons.firehydrant}),
            L.marker([474.875, 483], {icon: icons.firehydrant}),
            L.marker([279.75, 383.25], {icon: icons.firehydrant}),
            L.marker([296.75, 423.375], {icon: icons.firehydrant}),
            L.marker([280.25, 489.375], {icon: icons.firehydrant}),
            L.marker([344.75, 507], {icon: icons.firehydrant}),
            L.marker([409, 525.125], {icon: icons.firehydrant}),
            L.marker([386.125, 597.625], {icon: icons.firehydrant}),
            L.marker([478.125, 761], {icon: icons.firehydrant}),
            L.marker([406.5, 777.25], {icon: icons.firehydrant}),
            L.marker([367.875, 778.875], {icon: icons.firehydrant}),
            L.marker([197.625, 361.625], {icon: icons.firehydrant}),
            L.marker([200.375, 416.25], {icon: icons.firehydrant}),
            L.marker([141.375, 440.125], {icon: icons.firehydrant}),
            L.marker([187, 493.25], {icon: icons.firehydrant}),
            L.marker([228.5, 508.625], {icon: icons.firehydrant}),
            L.marker([134.625, 361.875], {icon: icons.firehydrant}),
            L.marker([201.75, 299], {icon: icons.firehydrant}),
            L.marker([364.125, 222.125], {icon: icons.firehydrant}),
            L.marker([409.625, 220.75], {icon: icons.firehydrant}),
            L.marker([442.125, 222.625], {icon: icons.firehydrant}),
            L.marker([618.143302, 271.738955], {icon: icons.firehydrant}),
            L.marker([620.75, 391.25], {icon: icons.firehydrant}),
            L.marker([662.75, 371.125], {icon: icons.firehydrant}),
            L.marker([875, 189.5], {icon: icons.firehydrant}),
            L.marker([821.25, 253.375], {icon: icons.firehydrant}),
            L.marker([821.875, 341.75], {icon: icons.firehydrant}),
            L.marker([821.5, 435.5], {icon: icons.firehydrant}),
            L.marker([843.625, 525], {icon: icons.firehydrant}),
            L.marker([923.25, 429.75], {icon: icons.firehydrant}),
            L.marker([908.125, 358.75], {icon: icons.firehydrant}),
            L.marker([987.125, 363.375], {icon: icons.firehydrant}),
            L.marker([660.375, 851], {icon: icons.firehydrant}),
            L.marker([411.625, 275.75], {icon: icons.firehydrant}),
            L.marker([309.375, 302.5], {icon: icons.firehydrant}),
            L.marker([247.75, 319.25], {icon: icons.firehydrant}),
            L.marker([1058.875, 855.5], {icon: icons.firehydrant}),
            L.marker([1106, 951.25], {icon: icons.firehydrant}),
            L.marker([993, 998.625], {icon: icons.firehydrant}),
            L.marker([971.25, 901.875], {icon: icons.firehydrant}),
            L.marker([987.875, 1166.75], {icon: icons.firehydrant}),
            L.marker([839.75, 1189.625], {icon: icons.firehydrant}),
            L.marker([919.75, 1257.625], {icon: icons.firehydrant}),
            L.marker([966.5, 1258.25], {icon: icons.firehydrant}),
            L.marker([1079.25, 1243.75], {icon: icons.firehydrant}),
            L.marker([969.625, 1317.875], {icon: icons.firehydrant}),
            L.marker([1079, 1322.125], {icon: icons.firehydrant}),
            L.marker([244.25, 782.875], {icon: icons.firehydrant}),
            L.marker([203.75, 760.75], {icon: icons.firehydrant}),
            L.marker([327.25, 746], {icon: icons.firehydrant}),
            L.marker([362.392225, 829.082701], {icon: icons.firehydrant}),
            // L.marker([100, 100], {icon: icons.firehydrant}),
            // L.marker([100, 100], {icon: icons.firehydrant}),
            // L.marker([100, 100], {icon: icons.firehydrant}),
            // L.marker([100, 100], {icon: icons.firehydrant}),
            // L.marker([100, 100], {icon: icons.firehydrant}),
        ])
    },
    {
        id: 4,
        group_id: 0,
        name: "EV Chargers",
        icon: "Icons/ev-charger.png",
        layer: L.layerGroup([
            L.marker([359.875, 304.125], {icon: icons.evcharger}),
            L.marker([359.875, 304.125], {icon: icons.evcharger}),
            L.marker([225.625, 475.75], {icon: icons.evcharger}),
            L.marker([225.625, 475.75], {icon: icons.evcharger}),
            L.marker([300.625, 339.375], {icon: icons.evcharger}),
            L.marker([300.625, 339.375], {icon: icons.evcharger}),
            L.marker([472.875, 382.625], {icon: icons.evcharger}),
            L.marker([472.875, 382.625], {icon: icons.evcharger}),
            L.marker([472.875, 382.625], {icon: icons.evcharger}),
            L.marker([843.25, 735.5], {icon: icons.evcharger}),
            L.marker([843.25, 735.5], {icon: icons.evcharger}),
            L.marker([1068.375, 1238.25], {icon: icons.evcharger}),
            L.marker([1068.375, 1238.25], {icon: icons.evcharger}),
            L.marker([1068.375, 1238.25], {icon: icons.evcharger}),
            L.marker([959, 965.125], {icon: icons.evcharger}),
            L.marker([492.125, 217.875], {icon: icons.evcharger}),
            L.marker([492.125, 217.875], {icon: icons.evcharger}),
            L.marker([492.125, 217.875], {icon: icons.evcharger}),
            L.marker([959, 961.75], {icon: icons.evcharger}),
            L.marker([958.625, 968.25], {icon: icons.evcharger}),
            L.marker([1025.25, 954], {icon: icons.evcharger}),
            L.marker([1022.25, 954.125], {icon: icons.evcharger}),
            L.marker([912.875, 1212], {icon: icons.evcharger}),
            L.marker([906.25, 1210.875], {icon: icons.evcharger}),
            L.marker([898.875, 1211.625], {icon: icons.evcharger}),
            L.marker([895, 1211.5], {icon: icons.evcharger}),
            L.marker([463.9, 745], {icon: icons.evcharger}),
            L.marker([463.9, 752.125], {icon: icons.evcharger}),
            L.marker([463.9, 749], {icon: icons.evcharger}),
            L.marker([463.9, 741.375], {icon: icons.evcharger}),
            L.marker([463.9, 738.125], {icon: icons.evcharger}),
            L.marker([328.625, 904.375], {icon: icons.evcharger}),
            L.marker([328.625, 907.375], {icon: icons.evcharger}),
            L.marker([328.625, 911.625], {icon: icons.evcharger}),
            L.marker([328.625, 914.875], {icon: icons.evcharger}),
        ])
    },
    {
        id: 5,
        group_id: 0,
        name: "Newspapers",
        icon: "Icons/newspaper.png",
        layer: L.layerGroup([
            L.marker([220.75, 350.125], {icon: icons.newspaper}),
            L.marker([306.5, 269.5], {icon: icons.newspaper}),
            L.marker([327.125, 442.625], {icon: icons.newspaper}),
            L.marker([543.5, 722], {icon: icons.newspaper}),
            L.marker([447.625, 725.875], {icon: icons.newspaper}),
            L.marker([836.75, 739.625], {icon: icons.newspaper}),
            L.marker([308, 509.875], {icon: icons.newspaper}),
            L.marker([992.875, 1258], {icon: icons.newspaper}),
            L.marker([174.625, 470.75], {icon: icons.newspaper}),
            L.marker([530.75, 422.375], {icon: icons.newspaper}),
        ])
    },
    {
        id: 6,
        group_id: 0,
        name: "Mail Drop Boxes",
        icon: "Icons/mail-drop-box.png",
        layer: L.layerGroup([
            L.marker([479.25, 426.75], {icon: icons.maildropbox}),
            L.marker([422.5, 457.5], {icon: icons.maildropbox}),
            L.marker([343.375, 402.125], {icon: icons.maildropbox}),
            L.marker([295.375, 269.375], {icon: icons.maildropbox}),
            L.marker([543.125, 721.375], {icon: icons.maildropbox}),
            L.marker([844.625, 743.625], {icon: icons.maildropbox}),
            L.marker([590.875, 510.5], {icon: icons.maildropbox}),
            L.marker([451.25, 313.5], {icon: icons.maildropbox}),
            L.marker([533.5, 447.5], {icon: icons.maildropbox}),
            L.marker([279.9375, 484.875], {icon: icons.maildropbox}),
            L.marker([439.25, 522.75], {icon: icons.maildropbox}),
            L.marker([158.375, 439.375], {icon: icons.maildropbox}),
            L.marker([1011.75, 960], {icon: icons.maildropbox}),
            L.marker([894.96875, 1240.78125], {icon: icons.maildropbox}),
            L.marker([989.875, 1193.625], {icon: icons.maildropbox}),
            L.marker([1075.25, 1219.125], {icon: icons.maildropbox}),
            L.marker([967.875, 1328.875], {icon: icons.maildropbox}),
            L.marker([231.75, 779.75], {icon: icons.maildropbox}),
            L.marker([542.5, 499], {icon: icons.maildropbox}),
            L.marker([507.75, 888.625], {icon: icons.maildropbox}),
        ])
    },
    {
        id: 7,
        group_id: 0,
        name: "Traffic Cameras",
        icon: "Icons/traffic-camera.png",
        order_denpendant: true,
        layer: L.layerGroup([
            L.marker([312.894751, 239.885976], {icon: icons.trafficcamera}).bindTooltip("Camera 1"), //all approx below
            L.marker([1298.286085, 908.294517], {icon: icons.trafficcamera}).bindTooltip("Camera 2"),
            L.marker([937.75, 973], {icon: icons.trafficcamera}).bindTooltip("Camera 3"),
            L.marker([430.375, 756.125], {icon: icons.trafficcamera}).bindTooltip("Camera 4"),
            L.marker([381.75, 417.375], {icon: icons.trafficcamera}).bindTooltip("Camera 5"),
            L.marker([327.25, 750.25], {icon: icons.trafficcamera}).bindTooltip("Camera 6"),
            L.marker([962.875, 1273.875], {icon: icons.trafficcamera}).bindTooltip("Camera 7"),
            L.marker([530.375, 442.25], {icon: icons.trafficcamera}).bindTooltip("Camera 8"),
            L.marker([484.625, 214.75], {icon: icons.trafficcamera}).bindTooltip("Camera 9"),
            L.marker([287.75, 399.75], {icon: icons.trafficcamera}).bindTooltip("Camera 10"),
            L.marker([218.5, 347.75], {icon: icons.trafficcamera}).bindTooltip("Camera 11"),
            L.marker([350.125, 474.75], {icon: icons.trafficcamera}).bindTooltip("Camera 12"),
            L.marker([218.625, 445.375], {icon: icons.trafficcamera}).bindTooltip("Camera 13"),
            L.marker([313.875, 463.125], {icon: icons.trafficcamera}).bindTooltip("Camera 14"),
        ])
    },
    {
        id: 8,
        group_id: 0,
        name: "Cash Registers",
        icon: "Icons/cash-register.png",
        layer: L.layerGroup([
            L.marker([465.625, 459.5], {icon: icons.cashregister}),
            L.marker([465.625, 459.5], {icon: icons.cashregister}),
            L.marker([833.325342, 747.411868], {icon: icons.cashregister}),
            L.marker([833.325342, 747.411868], {icon: icons.cashregister}),
            L.marker([370.875, 324.875], {icon: icons.cashregister}),
            L.marker([606.25, 416.625], {icon: icons.cashregister}),
            L.marker([606.25, 416.625], {icon: icons.cashregister}),
            L.marker([472.625, 223.25], {icon: icons.cashregister}),
            L.marker([472.625, 223.25], {icon: icons.cashregister}),
            L.marker([997.020561, 1282.691701], {icon: icons.cashregister}),
            L.marker([997.020561, 1282.691701], {icon: icons.cashregister}),
            L.marker([995.783125, 1291.884089], {icon: icons.cashregister}),
            L.marker([960.75, 1300.75], {icon: icons.cashregister}),
            L.marker([960.75, 1300.75], {icon: icons.cashregister}),
            L.marker([955.478038, 1231.426459], {icon: icons.cashregister}),
            L.marker([997.125, 1218.5], {icon: icons.cashregister}),
            L.marker([900.5, 1228.75], {icon: icons.cashregister}),
            L.marker([439, 447.75], {icon: icons.cashregister}),
            L.marker([287.125, 353.625], {icon: icons.cashregister}),
            L.marker([182.625, 266.25], {icon: icons.cashregister}),
            L.marker([182.625, 266.25], {icon: icons.cashregister}),
            L.marker([163.125, 344.4375], {icon: icons.cashregister}),
            L.marker([542.791943, 387.267006], {icon: icons.cashregister}),
            L.marker([542.791943, 387.267006], {icon: icons.cashregister}),
            // L.marker([100, 100], {icon: icons.cashregister}),
            // L.marker([100, 100], {icon: icons.cashregister}),
            // L.marker([100, 100], {icon: icons.cashregister}),
            // L.marker([100, 100], {icon: icons.cashregister}),
            // L.marker([100, 100], {icon: icons.cashregister}),
        ])
    },
    {
        id: 9,
        group_id: 3,
        name: "Areas",
        cluster: false,
        layer: L.layerGroup([
            L.marker([976.875, 1261.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SPRINGFIELD" + "</b>"
                })
            }),
            L.marker([873.25, 363], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "HOUSING SUBURBS" + "</b>"
                })
            }),
            L.marker([318.707507, 426.925354], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "DOWNTOWN RIVER CITY" + "</b>"
                })
            }),
            L.marker([428.625, 1332.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "HIGH ROCK PARK" + "</b>"
                })
            }),
            L.marker([800.625, 899.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-30px, -15px); font-stretch: extra-condensed; width: 60px; height: 30px;'>" + "FARMS" + "</b>"
                })
            }),
            L.marker([329.410371, 790.52543], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-50px, -20px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "INDUSTRIAL PARK" + "</b>"
                })
            }),
            L.marker([662.388363, 904.392011], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-60px, -15px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "TRAILER PARK" + "</b>"
                })
            }),
            L.marker([1225.572954, 796.327683], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-60px, -15px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "SPRING LAKE" + "</b>"
                })
            }),
            L.marker([338.626726, 561.305758], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-30px, -20px); font-stretch: extra-condensed; width: 60px; height: 30px;'>" + "CITY PARK" + "</b>"
                })
            }),
            L.marker([431.875, 361.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text' style='transform: translate(-60px, -15px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "FOUNTAIN" + "</b>"
                })
            }),
        ])
    },
    {
        id: 10,
        group_id: 1,
        name: "Vehicle for Sale Spots",
        icon: "Icons/sale-vehicle.png",
        layer: L.layerGroup([
            L.marker([525.125, 443], {icon: icons.salevehicle}),
            L.marker([430.959413, 556.673427], {icon: icons.salevehicle}),
            L.marker([524.9375, 428.0625], {icon: icons.salevehicle}),
            L.marker([348.125, 465.5], {icon: icons.salevehicle}), //first floor
            L.marker([324, 826.875], {icon: icons.salevehicle}),
            L.marker([507, 500.6875], {icon: icons.salevehicle}),
            L.marker([472.625, 348.875], {icon: icons.salevehicle}),
            L.marker([324, 807.25], {icon: icons.salevehicle}),
            L.marker([983.408756, 1228.067702], {icon: icons.salevehicle}),
            L.marker([428.153156, 801.85909], {icon: icons.salevehicle}),
            L.marker([924.504245, 1206.132885], {icon: icons.salevehicle}),
            L.marker([971.445584, 1213.203303], {icon: icons.salevehicle}),
            L.marker([1050.653463, 1298.373722], {icon: icons.salevehicle}),
            L.marker([1023.875, 1220.8125], {icon: icons.salevehicle}),
            L.marker([1056.75, 1238.5], {icon: icons.salevehicle}),
            L.marker([611.375, 1193.75], {icon: icons.salevehicle}),
            L.marker([472.700883, 326.153003], {icon: icons.salevehicle}),
            L.marker([411.858834, 550.81806], {icon: icons.salevehicle}),
            L.marker([507, 485.375], {icon: icons.salevehicle}),
            L.marker([1050.375, 1317.375], {icon: icons.salevehicle}), //first floor
            L.marker([524.938515, 393.84549], {icon: icons.salevehicle}),
            L.marker([524.951238, 401.648223], {icon: icons.salevehicle}),
            L.marker([355.75, 465.0625], {icon: icons.salevehicle}),
            L.marker([524.852253, 435.517336], {icon: icons.salevehicle}),
            L.marker([1016.526251, 1317.269839], {icon: icons.salevehicle}),
            L.marker([1050.373664, 1283.137121], {icon: icons.salevehicle}),
            L.marker([378.24483, 464.792072], {icon: icons.salevehicle}),
            // L.marker([100, 100], {icon: icons.salevehicle}),
            // L.marker([100, 100], {icon: icons.salevehicle}),
            // L.marker([100, 100], {icon: icons.salevehicle}),
            // L.marker([100, 100], {icon: icons.salevehicle}),
        ])
    },
    {
        id: 11,
        group_id: 1,
        name: "Bounty Vehicles",
        icon: "Icons/stolen-vehicle.png",
        layer: L.layerGroup([
            L.marker([412.086588, 539.389072], {icon: icons.stolenvehicle}),
            L.marker([822.25, 735.875], {icon: icons.stolenvehicle}),
            L.marker([307.845517, 355.166839], {icon: icons.stolenvehicle}),
            L.marker([472.87766, 333.577624], {icon: icons.stolenvehicle}),
            L.marker([323.75, 814.875], {icon: icons.stolenvehicle}),
            L.marker([525.875, 485.375], {icon: icons.stolenvehicle}),
            L.marker([432.625, 539.375], {icon: icons.stolenvehicle}),
            L.marker([312.25, 410.625], {icon: icons.stolenvehicle}),
            L.marker([487, 885.375], {icon: icons.stolenvehicle}),
            L.marker([236.25, 748.25], {icon: icons.stolenvehicle}),
            L.marker([898.260162, 1246.140406], {icon: icons.stolenvehicle}),
        ])
    },
    {
        id: 12,
        group_id: 0,
        name: "Fire Alarm Pull Box",
        icon: "Icons/fire-pull-box.png",
        layer: L.layerGroup([
            L.marker([230.25, 344.875], {icon: icons.firepullbox}),
            L.marker([207.625, 338.5], {icon: icons.firepullbox}),
            L.marker([368.875, 319.375], {icon: icons.firepullbox}),
            L.marker([608.625, 415], {icon: icons.firepullbox}),
            L.marker([594.875, 422.875], {icon: icons.firepullbox}),
            L.marker([472.125, 218.75], {icon: icons.firepullbox}),
            L.marker([483.5, 223.25], {icon: icons.firepullbox}),
            L.marker([319, 446.125], {icon: icons.firepullbox}),
            L.marker([464.25, 461.875], {icon: icons.firepullbox}),
            L.marker([284.433703, 452.194787], {icon: icons.firepullbox}),
            L.marker([244, 448.125], {icon: icons.firepullbox}),
            L.marker([220.617316, 460.680068], {icon: icons.firepullbox}),
            L.marker([174.655375, 495.3283], {icon: icons.firepullbox}),
            L.marker([167.625, 483.875], {icon: icons.firepullbox}),
            L.marker([298.125, 256.625], {icon: icons.firepullbox}),
            L.marker([299.25, 251], {icon: icons.firepullbox}),
            L.marker([543, 494.5], {icon: icons.firepullbox}),
            L.marker([538.25, 520.375], {icon: icons.firepullbox}), //first floor
            L.marker([555.625, 497.375], {icon: icons.firepullbox}), //first floor
            L.marker([549.125, 479.875], {icon: icons.firepullbox}), //second floor
            L.marker([550, 524.125], {icon: icons.firepullbox}), //second floor
            L.marker([547.5, 723.875], {icon: icons.firepullbox}),
            L.marker([380, 335.875], {icon: icons.firepullbox}),
            // L.marker([100, 100], {icon: icons.firepullbox}),
            // L.marker([100, 100], {icon: icons.firepullbox}),
            // L.marker([100, 100], {icon: icons.firepullbox}),
            // L.marker([100, 100], {icon: icons.firepullbox}),
        ])
    },
    {
        id: 13,
        group_id: 0,
        name: "Fire Alarm Control Panel",
        icon: "Icons/fire-control-panel.png",
        layer: L.layerGroup([
            L.marker([240.375, 338.375], {icon: icons.firecontrolpanel}),
            L.marker([377.125, 319], {icon: icons.firecontrolpanel}),
            L.marker([611.375, 418.625], {icon: icons.firecontrolpanel}),
            L.marker([466.125, 226.625], {icon: icons.firecontrolpanel}),
            L.marker([321.375, 452.625], {icon: icons.firecontrolpanel}),
            L.marker([467.375, 466.75], {icon: icons.firecontrolpanel}),
            L.marker([291, 452.125], {icon: icons.firecontrolpanel}),
            L.marker([238.25, 461.5], {icon: icons.firecontrolpanel}),
            L.marker([167.875, 492.875], {icon: icons.firecontrolpanel}),
            L.marker([311.125, 256], {icon: icons.firecontrolpanel}),
            L.marker([540.875, 516.75], {icon: icons.firecontrolpanel}),
            L.marker([557.625, 728.5], {icon: icons.firecontrolpanel}),
            // L.marker([100, 100], {icon: icons.firecontrolpanel}),
            // L.marker([100, 100], {icon: icons.firecontrolpanel}),
            // L.marker([100, 100], {icon: icons.firecontrolpanel}),
            // L.marker([100, 100], {icon: icons.firecontrolpanel}),
        ])
    },
    {
        id: 14,
        group_id: 1,
        name: "Safe Robberies",
        icon: "Icons/safe-robbery.png",
        layer: L.layerGroup([
            L.marker([552.625, 734.75], {icon: icons.saferobbery}),
            L.marker([438.8125, 729.375], {icon: icons.saferobbery}),
            L.marker([842.5, 741.25], {icon: icons.saferobbery}),
            L.marker([894.3125, 1218.9375], {icon: icons.saferobbery}),
            L.marker([188.043375, 275.524423], {icon: icons.saferobbery}),
            L.marker([291.1875, 257.5], {icon: icons.saferobbery}), //approx
            L.marker([946.218691, 952.104966], {icon: icons.saferobbery}), //approx
            L.marker([945.75, 1297.875], {icon: icons.saferobbery}),
            L.marker([546.898006, 424.65269], {icon: icons.saferobbery}), //approx
            L.marker([952.34273, 1244.8121], {icon: icons.saferobbery}), //approx
            L.marker([947.583368, 1275.807054], {icon: icons.saferobbery}),
            L.marker([517.273228, 886.79513], {icon: icons.saferobbery}),
            L.marker([209.833148, 330.943549], {icon: icons.saferobbery}), //approx
            L.marker([322.800263, 462.435651], {icon: icons.saferobbery}),
            // L.marker([100, 100], {icon: icons.saferobbery}),
            // L.marker([100, 100], {icon: icons.saferobbery}),
            // L.marker([100, 100], {icon: icons.saferobbery}),
        ])
    },
    {
        id: 15,
        group_id: 0,
        name: "Shut Off Values",
        icon: "Icons/shut-off-valve.png",
        layer: L.layerGroup([
            L.marker([189.5, 262.875], {icon: icons.shutoffvalve}),
            L.marker([820.75, 741.375], {icon: icons.shutoffvalve}),
            L.marker([874.875, 1198.25], {icon: icons.shutoffvalve}),
        ])
    },
    {
        id: 16,
        group_id: 2,
        name: "Ice",
        icon: "Icons/ice.png",
        layer: L.layerGroup([
            L.marker([189.75, 256.375], {icon: icons.ice}),
            L.marker([822.5, 739.625], {icon: icons.ice}),
            L.marker([892.25, 1238], {icon: icons.ice}),
            L.marker([1043.375, 1240], {icon: icons.ice}),
            L.marker([1008.75, 966.5], {icon: icons.ice}),
        ])
    },
    {
        id: 17,
        group_id: 3,
        name: "Postal Codes",
        cluster: false,
        layer: L.layerGroup([
            L.marker([228.375, 252.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "200" + "</b>"
                })
            }),
            L.marker([226.981277, 336.582828], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "201" + "</b>"
                })
            }),
            L.marker([226.246654, 403.735816], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "202" + "</b>"
                })
            }),
            L.marker([226.875, 475.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "203" + "</b>"
                })
            }),
            L.marker([231.047141, 563.210551], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "204" + "</b>"
                })
            }),
            L.marker([302, 254.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "205" + "</b>"
                })
            }),
            L.marker([303.842418, 331.194182], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "206" + "</b>"
                })
            }),
            L.marker([305.125, 401.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "207" + "</b>"
                })
            }),
            L.marker([305.625, 475], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "208" + "</b>"
                })
            }),
            L.marker([389.25, 235.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "210" + "</b>"
                })
            }),
            L.marker([357.5, 329.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "211" + "</b>"
                })
            }),
            L.marker([365.681188, 400.168194], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "212" + "</b>"
                })
            }),
            L.marker([366.988419, 474.645427], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "213" + "</b>"
                })
            }),
            L.marker([469.165349, 351.785624], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "216" + "</b>"
                })
            }),
            L.marker([444.416612, 474.46865], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "217" + "</b>"
                })
            }),
            L.marker([336.625, 561.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "218" + "</b>"
                })
            }),
            L.marker([453.432223, 560.205347], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "219" + "</b>"
                })
            }),
            L.marker([161.732168, 327.031957], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "220" + "</b>"
                })
            }),
            L.marker([161.397123, 403.404419], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "221" + "</b>"
                })
            }),
            L.marker([161.434866, 473.00713], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "222" + "</b>"
                })
            }),
            L.marker([63.63961, 467.044029], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "223" + "</b>"
                })
            }),
            L.marker([121.001824, 212.570772], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "224" + "</b>"
                })
            }),
            L.marker([285.063885, 122.770877], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "225" + "</b>"
                })
            }),
            L.marker([231.625, 746.875], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "300" + "</b>"
                })
            }),
            L.marker([231.375, 835.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "301" + "</b>"
                })
            }),
            L.marker([239.125, 978.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "302" + "</b>"
                })
            }),
            L.marker([304.75, 747.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "303" + "</b>"
                })
            }),
            L.marker([305.375, 829], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "304" + "</b>"
                })
            }),
            L.marker([467, 733.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "305" + "</b>"
                })
            }),
            L.marker([368.375, 746.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "306" + "</b>"
                })
            }),
            L.marker([366.5, 827], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "307" + "</b>"
                })
            }),
            L.marker([538.5, 733.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "308" + "</b>"
                })
            }),
            L.marker([431.125, 836], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "309" + "</b>"
                })
            }),
            L.marker([366, 914.875], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "310" + "</b>"
                })
            }),
            L.marker([304.875, 977.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "311" + "</b>"
                })
            }),
            L.marker([146.371104, 975.630581], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "312" + "</b>"
                })
            }),
            L.marker([146.5, 835.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "313" + "</b>"
                })
            }),
            L.marker([135.5, 661.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "314" + "</b>"
                })
            }),
            L.marker([469.875, 90.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "400" + "</b>"
                })
            }),
            L.marker([478.375, 239], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "401" + "</b>"
                })
            }),
            L.marker([539.5, 316], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "402" + "</b>"
                })
            }),
            L.marker([521.375, 415.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "403" + "</b>"
                })
            }),
            L.marker([517.25, 503.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "404" + "</b>"
                })
            }),
            L.marker([593.125, 273], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "405" + "</b>"
                })
            }),
            L.marker([634.375, 458.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "406" + "</b>"
                })
            }),
            L.marker([665.375, 556.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "407" + "</b>"
                })
            }),
            L.marker([658.375, 81.875], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "408" + "</b>"
                })
            }),
            L.marker([671.75, 270.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "409" + "</b>"
                })
            }),
            L.marker([702.125, 418.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "410" + "</b>"
                })
            }),
            L.marker([736.875, 551], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "411" + "</b>"
                })
            }),
            L.marker([735.875, 261.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "412" + "</b>"
                })
            }),
            L.marker([444, 967.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "500" + "</b>"
                })
            }),
            L.marker([575.25, 965.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "501" + "</b>"
                })
            }),
            L.marker([550.625, 814], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "502" + "</b>"
                })
            }),
            L.marker([627.875, 701.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "503" + "</b>"
                })
            }),
            L.marker([658.375, 821.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "504" + "</b>"
                })
            }),
            L.marker([661.625, 897.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "505" + "</b>"
                })
            }),
            L.marker([720.625, 879.875], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "506" + "</b>"
                })
            }),
            L.marker([724.375, 966.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "507" + "</b>"
                })
            }),
            // L.marker([100, 100], {
            //     icon: L.divIcon({
            //       iconSize: "auto",
            //       html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "508" + "</b>"
            //     })
            // }),
            L.marker([662, 965.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "509" + "</b>"
                })
            }),
            L.marker([691, 1046.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "510" + "</b>"
                })
            }),
            L.marker([510, 1053.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "511" + "</b>"
                })
            }),
            L.marker([733, 720.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "600" + "</b>"
                })
            }),
            L.marker([799.375, 805.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "601" + "</b>"
                })
            }),
            L.marker([842.255939, 690.929334], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "602" + "</b>"
                })
            }),
            L.marker([913.25, 749.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "603" + "</b>"
                })
            }),
            L.marker([855.875, 877.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "604" + "</b>"
                })
            }),
            L.marker([861.75, 1034], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "605" + "</b>"
                })
            }),
            L.marker([841.125, 92.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "700" + "</b>"
                })
            }),
            L.marker([774.375, 266.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "701" + "</b>"
                })
            }),
            L.marker([771.099945, 431.335137], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "702" + "</b>"
                })
            }),
            L.marker([840.625, 572.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "703" + "</b>"
                })
            }),
            L.marker([869.625, 244.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "704" + "</b>"
                })
            }),
            L.marker([869.013099, 374.600241], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "705" + "</b>"
                })
            }),
            L.marker([864.625, 482.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "706" + "</b>"
                })
            }),
            L.marker([914.5, 570.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "707" + "</b>"
                })
            }),
            L.marker([952.75, 244.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "708" + "</b>"
                })
            }),
            L.marker([948.375, 376.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "709" + "</b>"
                })
            }),
            L.marker([996.75, 495.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "710" + "</b>"
                })
            }),
            L.marker([1048.75, 350.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "711" + "</b>"
                })
            }),
            L.marker([1031.25, 550.875], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "800" + "</b>"
                })
            }),
            L.marker([1121.33537, 543.639532], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "801" + "</b>"
                })
            }),
            L.marker([1238.497527, 560.205347], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "802" + "</b>"
                })
            }),
            L.marker([1137.179304, 315.437187], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "803" + "</b>"
                })
            }),
            L.marker([1324.057448, 466.690476], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "804" + "</b>"
                })
            }),
            L.marker([1211.80205, 414.735981], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "805" + "</b>"
                })
            }),
            L.marker([1361.180554, 604.753075], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "806" + "</b>"
                })
            }),
            L.marker([1276.316536, 734.632695], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "900" + "</b>"
                })
            }),
            L.marker([1268.549565, 848.704914], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "901" + "</b>"
                })
            }),
            L.marker([1233.724556, 954.240601], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "902" + "</b>"
                })
            }),
            L.marker([1136.875, 766.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "903" + "</b>"
                })
            }),
            L.marker([1163.044558, 900.527088], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "904" + "</b>"
                })
            }),
            L.marker([1169.266465, 1025.893627], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "905" + "</b>"
                })
            }),
            L.marker([1047.93225, 1045.987706], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "906" + "</b>"
                })
            }),
            L.marker([1066.75, 911.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "907" + "</b>"
                })
            }),
            L.marker([998.375, 974.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "908" + "</b>"
                })
            }),
            L.marker([1005.152289, 791.782818], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "909" + "</b>"
                })
            }),
            L.marker([940.96013, 1036.691303], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "910" + "</b>"
                })
            }),
            L.marker([1233.125, 1170.875], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1100" + "</b>"
                })
            }),
            L.marker([1192.180133, 1292.668134], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1101" + "</b>"
                })
            }),
            L.marker([1149.932403, 1188.292946], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1102" + "</b>"
                })
            }),
            L.marker([1128.625, 1403.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1103" + "</b>"
                })
            }),
            L.marker([1042.125, 1217.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1104" + "</b>"
                })
            }),
            L.marker([1023.006736, 1300.899701], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1105" + "</b>"
                })
            }),
            L.marker([1034.850774, 1378.858223], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1106" + "</b>"
                })
            }),
            L.marker([933.911281, 1225.592828], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1107" + "</b>"
                })
            }),
            L.marker([939.037805, 1299.662264], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1108" + "</b>"
                })
            }),
            L.marker([944.75, 1425.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1109" + "</b>"
                })
            }),
            L.marker([881.585379, 1225.769605], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1110" + "</b>"
                })
            }),
            L.marker([880.90517, 1341.128324], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1111" + "</b>"
                })
            }),
            L.marker([812.112138, 1226.653489], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1112" + "</b>"
                })
            }),
            L.marker([959.190349, 1148.164636], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1113" + "</b>"
                })
            }),
            L.marker([806.985614, 1396.71267], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1200" + "</b>"
                })
            }),
            L.marker([579.650784, 1184.050305], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1201" + "</b>"
                })
            }),
            L.marker([539.345697, 1317.870263], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1202" + "</b>"
                })
            }),
            L.marker([439.290088, 1429.593135], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1203" + "</b>"
                })
            }),
            L.marker([346.05927, 1195.450452], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1204" + "</b>"
                })
            }),
            L.marker([304.734323, 1430.616159], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1205" + "</b>"
                })
            }),
            L.marker([195.691802, 1305.319118], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1206" + "</b>"
                })
            }),
            L.marker([121.44559, 1122.355238], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text postal-codes' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "1207" + "</b>"
                })
            }),
        ])
    },
    {
        id: 18,
        group_id: 3,
        name: "Street Names",
        icon: false,
        layer: L.layerGroup([
            L.marker([1306.026225, 719.127596], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; font-size: 15px;'>" + "HIGHWAY 55" + "</b>"
                })
            }),
            L.marker([931.247372, 1105.881638], {
                icon: L.divIcon({
                  iconSize: "auto",
                  iconAnchor: [103, 15],
                  html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg); font-size: 15px;'>" + "HIGHWAY 55" + "</b>"
                })
            }),
            L.marker([510.8145, 1105.747629], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg); font-size: 15px;'>" + "HIGHWAY 55" + "</b>"
              })
            }),
            L.marker([977.829475, 964.906618], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "MAPLE STREET" + "</b>"
              })
            }),
            L.marker([977.829475, 1266.301486], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "MAPLE STREET" + "</b>"
              })
            }),
            L.marker([1113.224988, 937.348269], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "LAKEVIEW COURT" + "</b>"
              })
            }),
            L.marker([1043.480772, 1011.874279], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "LAKEVIEW CT." + "</b>",
              }),
            }),
            L.marker([1046.164483, 937.623592], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "IRON ROAD" + "</b>",
              }),
            }),
            L.marker([1114.376458, 682.451752], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "SPRING CREEK RD." + "</b>"
              })
            }),
            L.marker([1045.710019, 867.906328], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "SPRING CREEK RD." + "</b>"
              })
            }),
            L.marker([1088.100822, 1266.616762], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "CEDAR ROAD" + "</b>"
              })
            }),
            L.marker([852.116907, 1223.609564], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GRAND ST." + "</b>"
              })
            }),
            L.marker([913.215192, 1181.86702], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "ELM STREET" + "</b>"
              })
            }),
            L.marker([1024.910227, 1181.725705], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "CEDAR ST." + "</b>"
              })
            }),
            L.marker([1033.900313, 1334.284933], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "TERRACE DRIVE" + "</b>"
              })
            }),
            L.marker([915.24705, 1266.475657], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "OAK VALLEY DR." + "</b>"
              })
            }),
            L.marker([745.002677, 1266.798905], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "OAK VALLEY DRIVE" + "</b>"
              })
            }),
            L.marker([628.415643, 1178.980318], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "OAK VALLEY DR." + "</b>"
              })
            }),
            L.marker([1168.278856, 609.058938], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
              }),
            }),
            L.marker([965.818865, 608.123216], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
              }),
            }),
            L.marker([863.9375, 700.25], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "COLONIAL DRIVE" + "</b>"
              })
            }),
            L.marker([790.405502, 859.233406], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(45deg);'>" + "COLONIAL DRIVE" + "</b>",
              }),
            }),
            L.marker([689.703816, 927.7953], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "VINE STREET" + "</b>"
              })
            }),
            L.marker([662.188766, 857.738531], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(280deg);'>" + "LEE ST." + "</b>",
              }),
            }),
            L.marker([629.389067, 1016.247871], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GIBON LANE" + "</b>"
              })
            }),
            L.marker([629.131023, 820.3756], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GIBON LANE" + "</b>"
              })
            }),
            L.marker([619.804796, 926.945917], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "COLONIAL DRIVE" + "</b>",
              }),
            }),
            L.marker([467.017675, 927.466231], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "COLONIAL DRIVE" + "</b>",
              }),
            }),
            L.marker([525.503926, 1006.562746], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "VINE STREET" + "</b>",
              }),
            }),
            L.marker([543.872774, 706.808457], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "GIBON LANE" + "</b>",
              }),
            }),
            L.marker([490.494198, 662.798951], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "INDEPENDENCE PARKWAY" + "</b>"
              })
            }),
            L.marker([790.125401, 608.454653], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
              }),
            }),
            L.marker([605.888299, 608.220881], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
              }),
            }),
            L.marker([396.289157, 608.907327], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "RIVERSIDE DRIVE" + "</b>",
              }),
            }),
            L.marker([264.849942, 620.458311], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FREEDOM AVENUE" + "</b>"
              })
            }),
            L.marker([264.539907, 901.377696], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FREEDOM AVENUE" + "</b>"
              })
            }),
            L.marker([264.337389, 331.348212], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FREEDOM AVENUE" + "</b>"
              })
            }),
            L.marker([333.835735, 790.727708], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GEORGIA AVENUE" + "</b>"
              })
            }),
            L.marker([395.955876, 789.929056], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "ORCHARD BOULEVARD" + "</b>"
              })
            }),
            L.marker([264.862017, 790.164985], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "CROSS STREET" + "</b>",
              }),
            }),
            L.marker([334.127634, 706.736663], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "INDUSTRIAL ROAD" + "</b>",
              }),
            }),
            L.marker([191.981582, 788.932729], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "MADISON COURT" + "</b>"
              })
            }),
            L.marker([334.178762, 873.881694], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [103, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "CLINE STREET" + "</b>",
              }),
            }),
            L.marker([192.586459, 443.541152], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "SOUTHERN AVENUE" + "</b>"
              })
            }),
            L.marker([396.277638, 477.502878], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "ORCHARD BOULEVARD" + "</b>"
              })
            }),
            L.marker([130.201719, 443.541152], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "LIBERTY WAY" + "</b>"
              })
            }),
            L.marker([326.723441, 370.080027], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "DURHAM ROAD" + "</b>",
              }),
            }),
            L.marker([264.484143, 432.228355], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "MAIN STREET" + "</b>",
              }),
            }),
            L.marker([334.05584, 516.052736], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "PARK STREET" + "</b>",
              }),
            }),
            L.marker([203.381588, 516.408921], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "LIBERTY WAY" + "</b>",
              }),
            }),
            L.marker([490.042024, 440.697691], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "INDEPENDENCE PARKWAY" + "</b>"
              })
            }),
            L.marker([363.941181, 291.864383], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "SANDSTONE ROAD" + "</b>",
              }),
            }),
            L.marker([334.0625, 441.1875], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "GRAND AVENUE" + "</b>"
              })
            }),
            L.marker([435.815879, 238.441162], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "HILLVIEW RD." + "</b>"
              })
            }),
            L.marker([422.848124, 187.593849], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "FAIRFAX ROAD" + "</b>",
              }),
            }),
            L.marker([557.686279, 268.479606], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(330deg);'>" + "FAIRFAX ROAD" + "</b>",
              }),
            }),
            L.marker([642.234178, 414.203149], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(330deg);'>" + "FAIRFAX ROAD" + "</b>",
              }),
            }),
            L.marker([692.952283, 550.800861], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FAIRFAX ROAD" + "</b>"
              })
            }),
            L.marker([589.709855, 363.934076], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "ARBOR LANE" + "</b>",
              }),
            }),
            L.marker([723.567085, 364.232754], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "ARBOR LANE" + "</b>",
              }),
            }),
            L.marker([334.05584, 245.713757], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FAIRFAX RD." + "</b>"
              })
            }),
            L.marker([443.388277, 516.186398], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "PARK ST." + "</b>",
              }),
            }),
            L.marker([443.388277, 431.955538], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "MAIN ST." + "</b>",
              }),
            }),
            L.marker([628.21105, 138.635177], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(300deg);'>" + "VALLEY DRIVE" + "</b>",
              }),
            }),
            L.marker([693.07153, 273.96283], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "VALLEY DRIVE" + "</b>"
              })
            }),
            L.marker([915.601555, 376.077843], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FRANKLIN COURT" + "</b>"
              })
            }),
            L.marker([814.187914, 376.077843], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "FRANKLIN COURT" + "</b>"
              })
            }),
            L.marker([993.505192, 376.077843], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "PINEVIEW CIRCLE" + "</b>"
              })
            }),
            L.marker([862.955287, 160.279613], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "ACADEMY PL." + "</b>"
              })
            }),
            L.marker([865.113449, 446.700073], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "JOYNER RD." + "</b>",
              }),
            }),
            L.marker([865.113449, 306.53079], {
              icon: L.divIcon({
                iconSize: "auto",
                iconAnchor: [99, 15],
                html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "EMERSON RD." + "</b>",
              }),
            }),

            // L.marker([100, 100], {
            //   icon: L.divIcon({
            //     iconSize: "auto",
            //     iconAnchor: [99, 15],
            //     html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(270deg);'>" + "---_---" + "</b>",
            //   }),
            // }),
            // L.marker([100, 100], {
            //   icon: L.divIcon({
            //     iconSize: "auto",
            //     iconAnchor: [103, 15],
            //     html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px; transform: rotate(90deg);'>" + "--_--" + "</b>",
            //   }),
            // }),
            // L.marker([100, 100], {
            //   icon: L.divIcon({
            //     iconSize: "auto",
            //     html: "<b class='area-text road-names' style='transform: translate(-100px, -13px); font-stretch: extra-condensed; width: 200px; height: 30px;'>" + "-_-" + "</b>"
            //   })
            // }),
        ])
    },
    {
        id: 19,
        group_id: 3,
        name: "Buildings",
        icon: false,
        layer: L.layerGroup([
            L.marker([387.086916, 238.733328], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC FIRE DEPT." + "</b>"
                })
            }),
            L.marker([539.699251, 413.834244], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-40px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "JEWELRY STORE" + "</b>"
                })
            }),
            L.marker([546.375, 502.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "HOSPITAL" + "</b>"
                })
            }),
            L.marker([467.875, 459.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "THREE GUYS" + "</b>"
                })
            }),
            L.marker([434.625, 449.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "VALLEY TRANSIT" + "</b>"
                })
            }),
            L.marker([365.383886, 455.763627], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "RC PARKING GARAGE" + "</b>"
                })
            }),
            L.marker([314.875, 451.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "NEWS STATION" + "</b>"
                })
            }),
            L.marker([297.599081, 252.111908], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC BANK" + "</b>"
                })
            }),
            L.marker([232.25, 455], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "DEALERSHIP" + "</b>"
                })
            }),
            L.marker([476.625, 225.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "GUN STORE" + "</b>"
                })
            }),
            L.marker([375.875, 335.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC MOD SHOP" + "</b>"
                })
            }),
            L.marker([180.875, 266], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "RC GAS-N-GO" + "</b>"
                })
            }),
            L.marker([171.625, 482.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "LA MESA" + "</b>"
                })
            }),
            L.marker([225, 338], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "DMV" + "</b>"
                })
            }),
            L.marker([289.029897, 355.851488], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "LIBERTY CAFE" + "</b>"
                })
            }),
            L.marker([287.5, 447.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "RIVERSIDE RECORDS" + "</b>"
                })
            }),
            L.marker([433.25, 731.875], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "POLICE DEPT." + "</b>"
                })
            }),
            L.marker([359.125, 910.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-75px, -25px); font-stretch: extra-condensed; width: 150px; height: 60px;'>" + "DEPARTMENT OF TRANSPORTATION" + "</b>"
                })
            }),
            L.marker([533.359391, 896.364863], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "COUNTY JAIL" + "</b>"
                })
            }),
            L.marker([226.375, 829.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "WASTE CENTER" + "</b>"
                })
            }),
            L.marker([605.75, 425.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "TOOL STORE" + "</b>"
                })
            }),
            L.marker([552.375, 729.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "POST OFFICE" + "</b>"
                })
            }),
            L.marker([833, 749.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "FARMS<br>GAS-N-GO" + "</b>"
                })
            }),
            L.marker([903.125, 1228.125], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SF GAS-N-GO" + "</b>"
                })
            }),
            L.marker([932.875, 1289.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SF MOD SHOP" + "</b>"
                })
            }),
            L.marker([1034.125, 1300.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "SF PARKING GARAGE" + "</b>"
                })
            }),
            L.marker([958.625, 1248.5], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-30px, -10px); font-stretch: extra-condensed; width: 60px; height: 40px;'>" + "SF FIRE DEPT." + "</b>"
                })
            }),
            L.marker([959.125, 1233.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "LIBERTY<br>APPAREL" + "</b>"
                })
            }),
            L.marker([996.875, 1216.375], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "BARBER SHOP" + "</b>"
                })
            }),
            L.marker([997, 1280.338223], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "RICK AND<br>JOHN'S" + "</b>"
                })
            }),
            L.marker([997, 1291.625], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "SPRING<br>BAKERY" + "</b>"
                })
            }),
            L.marker([960, 1300.75], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-50px, -10px); font-stretch: extra-condensed; width: 100px; height: 30px;'>" + "THEATER" + "</b>"
                })
            }),
            L.marker([939.875, 951.25], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-60px, -10px); font-stretch: extra-condensed; width: 120px; height: 30px;'>" + "SHERIFF'S OFFICE" + "</b>"
                })
            }),
            L.marker([164.375, 345.375], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 100px; height: 40px;'>" + "DRAGON<br>SHOP" + "</b>"
              })
          	}),
			      L.marker([539.699251, 386.0424], {
                icon: L.divIcon({
                  iconSize: "auto",
                  html: "<b class='area-text buildings' style='transform: translate(-40px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "GADGET SHACK" + "</b>"
                })
            }),
            L.marker([376.55457, 818.919597], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text buildings' style='transform: translate(-50px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "RC GAS DEPOT" + "</b>"
              })
            }),
            L.marker([559.867807, 978.110847], {
              icon: L.divIcon({
                iconSize: "auto",
                html: "<b class='area-text buildings' style='transform: translate(-40px, -15px); font-stretch: extra-condensed; width: 80px; height: 40px;'>" + "CHOP<br>SHOP" + "</b>"
              })
          }),
        ])
    },
    {
        id: 20,
        group_id: 0,
        name: "Gas Pumps",
        icon: "Icons/gas-pump.png",
        layer: L.layerGroup([
            L.marker([208.375, 264.875], {icon: icons.gaspump}),
            L.marker([240.875, 264.375], {icon: icons.gaspump}),
            L.marker([219.125, 264.875], {icon: icons.gaspump}),
            L.marker([230.5, 264.75], {icon: icons.gaspump}),
            L.marker([848.875, 720.5625], {icon: icons.gaspump}),
            L.marker([839.1875, 720.5], {icon: icons.gaspump}),
            L.marker([826.5, 720.4375], {icon: icons.gaspump}),
            L.marker([814.9375, 720.375], {icon: icons.gaspump}),
            L.marker([871.6875, 1246.9375], {icon: icons.gaspump}),
            L.marker([871.8125, 1223.0625], {icon: icons.gaspump}),
            L.marker([871.75, 1235.375], {icon: icons.gaspump}),
            L.marker([871.763141, 1212.991257], {icon: icons.gaspump}),
        ])
    },
    {
        id: 21,
        group_id: 2,
        name: "Water Towers",
        icon: "Icons/water-tower.png",
        layer: L.layerGroup([
            L.marker([311.25, 860.875], {icon: icons.watertower}),
            L.marker([950.375, 826.6875], {icon: icons.watertower}),
            L.marker([627.9375, 277.375], {icon: icons.watertower}),
        ])
    },
    {
        id: 22,
        group_id: 2,
        name: "Bunker",
        icon: "Icons/bunker.png",
        layer: L.layerGroup([
            L.marker([753.3125, 171.375], {icon: icons.bunker}),
        ])
    },
    {
        id: 23,
        group_id: 2,
        name: "Criminal Hideout",
        icon: "Icons/criminal-hideout.png",
        layer: L.layerGroup([
            L.marker([632.3125, 1339.25], {icon: icons.criminalhideout}),
        ])
    },
    {
        id: 24,
        name: "Clover Coins",
        removed: true,
    },
    {
        id: 25,
        name: "Green Guardian",
        removed: true,
    },
    {
        id: 26,
        group_id: 2,
        name: "Traffic Lights",
        icon: "Icons/traffic-light.png",
        layer: L.layerGroup([
            L.marker([978.25, 1266.25], {icon: icons.trafficlight}),
            L.marker([396.875, 516.5625], {icon: icons.trafficlight}),
            L.marker([396.625, 431.6875], {icon: icons.trafficlight}),
            L.marker([334.125, 369.375], {icon: icons.trafficlight}),
            L.marker([334.3125, 432.0625], {icon: icons.trafficlight}),
            L.marker([265.193187, 432.276786], {icon: icons.trafficlight}),
            L.marker([264.375, 369.5625], {icon: icons.trafficlight}),
            L.marker([264.6875, 291.1875], {icon: icons.trafficlight}),
            L.marker([192.5625, 432], {icon: icons.trafficlight}),
        ])
    },
    {
        id: 27,
        group_id: 0,
        name: "Highway Message Boards",
        icon: "Icons/highway-message-board.png",
        layer: L.layerGroup([
            L.marker([497.302009, 1114.631177], {icon: icons.highwaymessageboard}),
            L.marker([729.981687, 1096.430394], {icon: icons.highwaymessageboard}),
            L.marker([1291.22096, 907.656504], {icon: icons.highwaymessageboard}),
            L.marker([1214.013955, 1058.804016], {icon: icons.highwaymessageboard}),
        ])
    },
    {
        id: 28,
        group_id: 2,
        name: "Highway Billboards",
        icon: "Icons/highway-billboard.png",
        layer: L.layerGroup([
			L.marker([773.4375, 1081.0625], {icon: icons.highwaybillboard}),
			L.marker([1237.694411, 1058.478363], {icon: icons.highwaybillboard}),
        ])
  	},
	{
		id: 29,
		group_id: 2,
		name: "Fire Watch Tower",
		icon: "Icons/fire-watch-tower.png",
		layer: L.layerGroup([
			L.marker([433.020041, 1273.715146], {icon: icons.firewatchtower}),
		])
  	},
	{
		id: 30,
		group_id: 2,
		name: "Cell Towers",
		icon: "Icons/cell-tower.png",
		layer: L.layerGroup([
			L.marker([600.863987, 772.602547], {icon: icons.celltower}),
			L.marker([627.292103, 483.484262], {icon: icons.celltower}),
			L.marker([1176.598362, 970.844677], {icon: icons.celltower}),
      L.marker([314.956949, 453.978865], {icon: icons.celltower}),
      L.marker([293.133461, 475.022667], {icon: icons.celltower}),
		])
  	},
	{
		id: 31,
		group_id: 2,
		name: "Pylons",
		icon: "Icons/pylon.png",
		layer: L.layerGroup([
			L.marker([458.785551, 844.800927], {icon: icons.pylon}),
			L.marker([560.58877, 946.665898], {icon: icons.pylon}),
			L.marker([663.12516, 983.684386], {icon: icons.pylon}),
			L.marker([765.880023, 1021.0522], {icon: icons.pylon}),
			L.marker([845.84513, 1068.435954], {icon: icons.pylon}),
			L.marker([954.80523, 1067.763166], {icon: icons.pylon}),
			L.marker([1063.33117, 1067.580852], {icon: icons.pylon}),
			L.marker([1167.676273, 1033.883518], {icon: icons.pylon}),
			L.marker([1231.18335, 968.10646], {icon: icons.pylon}),
			L.marker([1257.961731, 879.32528], {icon: icons.pylon}),
			L.marker([1265.659253, 776.575022], {icon: icons.pylon}),
			L.marker([1253.285108, 684.556581], {icon: icons.pylon}),
      L.marker([1224.165893, 605.78799], {icon: icons.pylon}),
      L.marker([1207.019861, 538.400462], {icon: icons.pylon}),
		])
  },
	{
    id: 32,
    group_id: 0,
    name: "Fuel Truck Resupplies",
    icon: "Icons/fuel-truck-resupply.png",
    layer: L.layerGroup([
      L.marker([365.573251, 844.149704], {icon: icons.fueltruckresupply}),
      L.marker([351.753438, 824.451277], {icon: icons.fueltruckresupply}),
    ])
  },
  {
    id: 33,
    group_id: 0,
    name: "Gas Station Resupplies",
    icon: "Icons/gas-station-resupply.png",
    layer: L.layerGroup([
      L.marker([222.259022, 253.340452], {icon: icons.gasstationresupply}),
      L.marker([849.893195, 709.608409], {icon: icons.gasstationresupply}),
      L.marker([870.985839, 1207.235994], {icon: icons.gasstationresupply}),
    ])
  },
  {
    id: 34,
    group_id: 1,
    name: "Dumpsters",
    //team: "DOT",
    icon: "Icons/dumpster.png",
    layer: L.layerGroup([
      L.marker([441.53093, 818.375784], {icon: icons.dumpster}),
      L.marker([325.045368, 716.21945], {icon: icons.dumpster}),
      L.marker([495.25, 874.5625], {icon: icons.dumpster}),
      L.marker([241.442035, 753.043565], {icon: icons.dumpster}),
      L.marker([939.007525, 1303.544474], {icon: icons.dumpster}),
      L.marker([356.12703, 842.295533], {icon: icons.dumpster}),
      L.marker([711.121692, 823.791878], {icon: icons.dumpster}),
      L.marker([285.229198, 308.917275], {icon: icons.dumpster}),
      L.marker([227.011512, 725.761979], {icon: icons.dumpster}),
      L.marker([378.103491, 942.720438], {icon: icons.dumpster}),
      L.marker([111.125, 322.9375], {icon: icons.dumpster}),
      L.marker([308.324729, 843.256977], {icon: icons.dumpster}),
      L.marker([522.024462, 745.190808], {icon: icons.dumpster}),
      L.marker([609.815239, 439.520708], {icon: icons.dumpster}),
      L.marker([456.704348, 481.334742], {icon: icons.dumpster}),
      L.marker([584.687463, 460.663937], {icon: icons.dumpster}),
      L.marker([305.69735, 414.967281], {icon: icons.dumpster}),
      L.marker([206.254209, 503.680999], {icon: icons.dumpster}),
      L.marker([371.46376, 757.272902], {icon: icons.dumpster}),
      L.marker([544.781403, 982.684081], {icon: icons.dumpster}),
      L.marker([421.730912, 460.160209], {icon: icons.dumpster}),
      L.marker([180.596919, 440.346335], {icon: icons.dumpster}),
      L.marker([1027.629793, 963.591329], {icon: icons.dumpster}),
      L.marker([182.59375, 440.346335], {icon: icons.dumpster}),
      L.marker([1022.874153, 1252.949022], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
      // L.marker([100, 100], {icon: icons.dumpster}),
    ])
  },
  {
    id: 35,
    group_id: 2,
    name: "Speed Limit Signs",
    icon: "Icons/speed-limit-sign-20.png",
    cluster_radius: 65,
    sub_layers: [36, 37, 38, 39, 40, 41, 47],
    layer: L.layerGroup([
      L.marker([156.160113, 362.104963], {icon: icons.speedlimitsign20}),
      L.marker([147.55832, 310.405685], {icon: icons.speedlimitsign20}),
    ])
  },
  {
    id: 36,
    sub_layer: true,
    icon: "Icons/speed-limit-sign-40.png",
    cluster_radius: 65,
    layer: L.layerGroup([
      L.marker([250.732676, 392.807421], {icon: icons.speedlimitsign40}),
      L.marker([211.755362, 426.633748], {icon: icons.speedlimitsign40}),
      L.marker([155.05842, 437.94236], {icon: icons.speedlimitsign40}),
      L.marker([135.860297, 402.24877], {icon: icons.speedlimitsign40}),
      L.marker([213.449663, 286.548862], {icon: icons.speedlimitsign40}),
      L.marker([197.995844, 460.085973], {icon: icons.speedlimitsign40}),
      L.marker([277.509007, 501.53671], {icon: icons.speedlimitsign40}),
      L.marker([277.546119, 337.872195], {icon: icons.speedlimitsign40}),
      L.marker([251.335762, 265.214628], {icon: icons.speedlimitsign40}),
      L.marker([294.497541, 521.473156], {icon: icons.speedlimitsign40}),
      L.marker([401.541447, 493.221304], {icon: icons.speedlimitsign40}),
      L.marker([380.267368, 380.04973], {icon: icons.speedlimitsign40}),
      L.marker([310.079229, 364.869505], {icon: icons.speedlimitsign40}),
      L.marker([294.012675, 437.517946], {icon: icons.speedlimitsign40}),
      L.marker([339.449599, 411.279181], {icon: icons.speedlimitsign40}),
      L.marker([328.79208, 334.097088], {icon: icons.speedlimitsign40}),
      L.marker([237.823532, 868.646234], {icon: icons.speedlimitsign40}),
      L.marker([197.288521, 767.716778], {icon: icons.speedlimitsign40}),
      L.marker([232.208586, 699.716429], {icon: icons.speedlimitsign40}),
      L.marker([284.153939, 712.260452], {icon: icons.speedlimitsign40}),
      L.marker([971.809226, 1162.206265], {icon: icons.speedlimitsign40}),
      L.marker([971.044744, 1190.96758], {icon: icons.speedlimitsign40}),
      L.marker([986.016212, 1241.900479], {icon: icons.speedlimitsign40}),
      L.marker([968.65073, 1286.292867], {icon: icons.speedlimitsign40}),
      L.marker([985.646523, 1319.786811], {icon: icons.speedlimitsign40}),
      L.marker([988.548455, 1339.806219], {icon: icons.speedlimitsign40}),
      L.marker([1063.6875, 1328.6875], {icon: icons.speedlimitsign40}),
      L.marker([1094.078231, 1319.05433], {icon: icons.speedlimitsign40}),
      L.marker([1082.971271, 1214.533129], {icon: icons.speedlimitsign40}),
      L.marker([1050.34388, 1176.395299], {icon: icons.speedlimitsign40}),
      L.marker([997.17901, 1187.51774], {icon: icons.speedlimitsign40}),
      L.marker([1061.66969, 1261.268978], {icon: icons.speedlimitsign40}),
      L.marker([900.693377, 1291.733808], {icon: icons.speedlimitsign40}),
      L.marker([857.575116, 1249.747913100], {icon: icons.speedlimitsign40}),
      L.marker([846.319238, 1199.093181], {icon: icons.speedlimitsign40}),
      L.marker([866.441631, 1187.28744], {icon: icons.speedlimitsign40}),
      L.marker([955.309154, 1176.46713], {icon: icons.speedlimitsign40}),
      L.marker([145.082692, 375.833001], {icon: icons.speedlimitsign40}),
    ])
  },
  {
    id: 37,
    sub_layer: true,
    icon: "Icons/speed-limit-sign-45.png",
    cluster_radius: 65,
    layer: L.layerGroup([
      L.marker([460.59073, 510.938204], {icon: icons.speedlimitsign45}),
      L.marker([657.205113, 494.799058], {icon: icons.speedlimitsign45}),
      L.marker([294.518137, 617.329168], {icon: icons.speedlimitsign45}),
      L.marker([375.19126, 601.183206], {icon: icons.speedlimitsign45}),
      L.marker([469.782111, 600.756617], {icon: icons.speedlimitsign45}),
      L.marker([1039.547564, 885.115887], {icon: icons.speedlimitsign45}),
      L.marker([1051.152989, 994.33168], {icon: icons.speedlimitsign45}),
      L.marker([1021.437867, 1018.055623], {icon: icons.speedlimitsign45}),
      L.marker([1108.478268, 979.696445], {icon: icons.speedlimitsign45}),
      L.marker([1118.832198, 956.506761], {icon: icons.speedlimitsign45}),
      L.marker([1068.27436, 868.374187], {icon: icons.speedlimitsign45}),
      L.marker([1054.47519, 942.825781], {icon: icons.speedlimitsign45}),
      L.marker([1074.942966, 931.822428], {icon: icons.speedlimitsign45}),
      L.marker([705.599642, 369.728057], {icon: icons.speedlimitsign45}),
      L.marker([819.840993, 483.318791], {icon: icons.speedlimitsign45}),
      L.marker([833.596037, 536.872894], {icon: icons.speedlimitsign45}),
      L.marker([921.126861, 499.306006], {icon: icons.speedlimitsign45}),
      L.marker([920.588235, 329.254184], {icon: icons.speedlimitsign45}),
      L.marker([910.749101, 321.95993], {icon: icons.speedlimitsign45}),
      L.marker([868.726277, 165.050298], {icon: icons.speedlimitsign45}),
      L.marker([808.033657, 234.460062], {icon: icons.speedlimitsign45}),
      L.marker([819.511902, 285.35442], {icon: icons.speedlimitsign45}),
      L.marker([828.642276, 312.733127], {icon: icons.speedlimitsign45}),
      L.marker([902.589732, 442.033486], {icon: icons.speedlimitsign45}),
      L.marker([825.989256, 451.815742], {icon: icons.speedlimitsign45}),
      L.marker([869.3125, 581.125], {icon: icons.speedlimitsign45}),
      L.marker([641.576811, 860.839564], {icon: icons.speedlimitsign45}),
      L.marker([696.113994, 892.531965], {icon: icons.speedlimitsign45}),
    ])
  },
  {
    id: 38,
    sub_layer: true,
    icon: "Icons/speed-limit-sign-50.png",
    cluster_radius: 65,
    layer: L.layerGroup([
      L.marker([277.161386, 262.4646], {icon: icons.speedlimitsign50}),
      L.marker([307.492191, 297.297493], {icon: icons.speedlimitsign50}),
      L.marker([446.048085, 297.462581], {icon: icons.speedlimitsign50}),
      L.marker([495.519753, 342.671078], {icon: icons.speedlimitsign50}),
      L.marker([484.792471, 390.818043], {icon: icons.speedlimitsign50}),
      L.marker([495.45868, 484.032121], {icon: icons.speedlimitsign50}),
      L.marker([435.329691, 437.016383], {icon: icons.speedlimitsign50}),
      L.marker([430.561738, 216.661937], {icon: icons.speedlimitsign50}),
      L.marker([339.541924, 317.424499], {icon: icons.speedlimitsign50}),
      L.marker([328.893042, 237.587878], {icon: icons.speedlimitsign50}),
      L.marker([250.669354, 595.91424], {icon: icons.speedlimitsign50}),
      L.marker([277.423498, 695.003412], {icon: icons.speedlimitsign50}),
      L.marker([251.888011, 801.683761], {icon: icons.speedlimitsign50}),
      L.marker([276.62276, 944.133872], {icon: icons.speedlimitsign50}),
      L.marker([308.84732, 880.029307], {icon: icons.speedlimitsign50}),
      L.marker([384.186783, 869.452915], {icon: icons.speedlimitsign50}),
      L.marker([383.828871, 700.805873], {icon: icons.speedlimitsign50}),
      L.marker([303.060415, 795.465577], {icon: icons.speedlimitsign50}),
      L.marker([321.450795, 784.529286], {icon: icons.speedlimitsign50}),
      L.marker([383.039806, 783.546473], {icon: icons.speedlimitsign50}),
      L.marker([328.524019, 719.292403], {icon: icons.speedlimitsign50}),
      L.marker([339.641965, 852.644453], {icon: icons.speedlimitsign50}),
      L.marker([389.749649, 622.972672], {icon: icons.speedlimitsign50}),
      L.marker([390.115471, 751.82923], {icon: icons.speedlimitsign50}),
      L.marker([403.157724, 776.108505], {icon: icons.speedlimitsign50}),
      L.marker([448.494914, 795.437714], {icon: icons.speedlimitsign50}),
      L.marker([484.762383, 718.792605], {icon: icons.speedlimitsign50}),
      L.marker([485.870747, 621.767832], {icon: icons.speedlimitsign50}),
      L.marker([539.894015, 95.947314], {icon: icons.speedlimitsign50}),
      L.marker([684.379699, 944.52096], {icon: icons.speedlimitsign50}),
      L.marker([656.637035, 1011.869804], {icon: icons.speedlimitsign50}),
      L.marker([402.953623, 910.406941], {icon: icons.speedlimitsign50}),
    ])
  },
  {
    id: 39,
    sub_layer: true,
    icon: "Icons/speed-limit-sign-55.png",
    cluster_radius: 65,
    layer: L.layerGroup([
      L.marker([362.929289, 192.684773], {icon: icons.speedlimitsign55}),
      L.marker([478.145712, 182.632579], {icon: icons.speedlimitsign55}),
      L.marker([686.432756, 504.464368], {icon: icons.speedlimitsign55}),
      L.marker([506.947027, 616.499569], {icon: icons.speedlimitsign55}),
      L.marker([1015.314838, 857.515634], {icon: icons.speedlimitsign55}),
      L.marker([977.755362, 874.668806], {icon: icons.speedlimitsign55}),
      L.marker([982.833627, 920.437046], {icon: icons.speedlimitsign55}),
      L.marker([982.926824, 1047.325725], {icon: icons.speedlimitsign55}),
      L.marker([972.660332, 1087.458374], {icon: icons.speedlimitsign55}),
      L.marker([983.070411, 1162.016077], {icon: icons.speedlimitsign55}),
      L.marker([828.198817, 1260.92607], {icon: icons.speedlimitsign55}),
      L.marker([622.552472, 1190.423486], {icon: icons.speedlimitsign55}),
      L.marker([808.800324, 385.413762], {icon: icons.speedlimitsign55}),
      L.marker([566.233832, 711.214764], {icon: icons.speedlimitsign55}),
      L.marker([634.876779, 836.416905], {icon: icons.speedlimitsign55}),
      L.marker([417.588796, 933.284412], {icon: icons.speedlimitsign55}),
      L.marker([614.729067, 921.725178], {icon: icons.speedlimitsign55}),
      L.marker([634.40412, 916.005139], {icon: icons.speedlimitsign55}),
      L.marker([623.189913, 981.299044], {icon: icons.speedlimitsign55}),
    ])
  },
  {
    id: 40,
    sub_layer: true,
    icon: "Icons/speed-limit-sign-65.png",
    cluster_radius: 65,
    layer: L.layerGroup([
      L.marker([518.217029, 210.525668], {icon: icons.speedlimitsign65}),
      L.marker([564.182823, 290.178945], {icon: icons.speedlimitsign65}),
      L.marker([574.100892, 287.308891], {icon: icons.speedlimitsign65}),
      L.marker([621.375, 388.84375], {icon: icons.speedlimitsign65}),
      L.marker([683.763058, 476.191158], {icon: icons.speedlimitsign65}),
      L.marker([639.745845, 599.5917], {icon: icons.speedlimitsign65}),
      L.marker([640.043806, 616.416367], {icon: icons.speedlimitsign65}),
      L.marker([793.506838, 617.329168], {icon: icons.speedlimitsign65}),
      L.marker([823.455406, 600.788446], {icon: icons.speedlimitsign65}),
      L.marker([995.516843, 617.007227], {icon: icons.speedlimitsign65}),
      L.marker([1063.862666, 599.721222], {icon: icons.speedlimitsign65}),
      L.marker([1050.628233, 843.036902], {icon: icons.speedlimitsign65}),
      L.marker([549.848005, 106.424076], {icon: icons.speedlimitsign65}),
      L.marker([699.14625, 287.029691], {icon: icons.speedlimitsign65}),
      L.marker([705.722829, 358.342983], {icon: icons.speedlimitsign65}),
      L.marker([585.332222, 1001.53598], {icon: icons.speedlimitsign65}),
      L.marker([460.197278, 1012.362219], {icon: icons.speedlimitsign65}),
      L.marker([391.094841, 950.858853], {icon: icons.speedlimitsign65}),
      L.marker([700.821521, 932.668814], {icon: icons.speedlimitsign65}),
      L.marker([846.844069, 794.244334], {icon: icons.speedlimitsign65}),
    ])
  },
  {
    id: 41,
    sub_layer: true,
    icon: "Icons/speed-limit-sign-75.png",
    cluster_radius: 65,
    layer: L.layerGroup([
      L.marker([1291.570579, 710.750126], {icon: icons.speedlimitsign75}),
      L.marker([1317.625684, 890.330158], {icon: icons.speedlimitsign75}),
      L.marker([1269.617676, 951.366845], {icon: icons.speedlimitsign75}),
      L.marker([1155.733628, 1066.436631], {icon: icons.speedlimitsign75}),
      L.marker([738.050001, 1089.457725], {icon: icons.speedlimitsign75}),
      L.marker([713.53698, 1121.155768], {icon: icons.speedlimitsign75}),
      L.marker([587.258483, 1089.331995], {icon: icons.speedlimitsign75}),
      L.marker([439.233533, 1120.84242], {icon: icons.speedlimitsign75}),

      // L.marker([100, 100], {icon: icons.speedlimitsign}),
      // L.marker([100, 100], {icon: icons.speedlimitsign}),
      // L.marker([100, 100], {icon: icons.speedlimitsign}),
    ])
  },
  {
    id: 42,
    group_id: 2,
    name: "Stop Signs",
    icon: "Icons/stop-sign.png",
    layer: L.layerGroup([
      L.marker([269.598628, 1080.897343], {icon: icons.stopsign}),
      L.marker([259.617578, 1129.959732], {icon: icons.stopsign}),
      L.marker([968.841163, 1140.530057], {icon: icons.stopsign}),
      L.marker([985.583189, 1072.597089], {icon: icons.stopsign}),
      L.marker([1122.767047, 643.63483], {icon: icons.stopsign}),
      L.marker([1120.451415, 619.393218], {icon: icons.stopsign}),
      L.marker([869.586748, 615.568516], {icon: icons.stopsign}),
      L.marker([859.665069, 600.245269], {icon: icons.stopsign}),
      L.marker([697.528639, 617.546806], {icon: icons.stopsign}),
      L.marker([687.944591, 599.992181], {icon: icons.stopsign}),
      L.marker([661.420817, 594.634555], {icon: icons.stopsign}),
      L.marker([618.124074, 523.598201], {icon: icons.stopsign}),
      L.marker([608.045938, 509.669272], {icon: icons.stopsign}),
      L.marker([681.092173, 492.804025], {icon: icons.stopsign}),
      L.marker([495.612573, 619.188693], {icon: icons.stopsign}),
      L.marker([484.147541, 596.720308], {icon: icons.stopsign}),
      L.marker([390.144627, 596.874434], {icon: icons.stopsign}),
      L.marker([401, 618.6875], {icon: icons.stopsign}),
      L.marker([281.163334, 600.333657], {icon: icons.stopsign}),
      L.marker([248.80971, 712.534272], {icon: icons.stopsign}),
      L.marker([281.343924, 700.973818], {icon: icons.stopsign}),
      L.marker([249.799341, 795.168455], {icon: icons.stopsign}),
      L.marker([281.359303, 785.207119], {icon: icons.stopsign}),
      L.marker([247.152241, 880.191309], {icon: icons.stopsign}),
      L.marker([280.667987, 868.420457], {icon: icons.stopsign}),
      L.marker([298.163568, 712.327998], {icon: icons.stopsign}),
      L.marker([319.020296, 712.524829], {icon: icons.stopsign}),
      L.marker([559.487893, 597.179557], {icon: icons.stopsign}),
      L.marker([1087.668735, 788.409445], {icon: icons.stopsign}),
      L.marker([1039.162831, 868.726277], {icon: icons.stopsign}),
      L.marker([1051.130788, 856.570005], {icon: icons.stopsign}),
      L.marker([1052.277993, 930.890599], {icon: icons.stopsign}),
      L.marker([1040.308284, 943.365687], {icon: icons.stopsign}),
      L.marker([1039.457067, 1006.567654], {icon: icons.stopsign}),
      L.marker([983.762309, 930.906077], {icon: icons.stopsign}),
      L.marker([983.1252, 957.991624], {icon: icons.stopsign}),
      L.marker([983.591717, 1006.451025], {icon: icons.stopsign}),
      L.marker([1107.5, 944.125], {icon: icons.stopsign}),
      L.marker([1027.94144, 942.722381], {icon: icons.stopsign}),
      L.marker([986.300568, 1176.204594], {icon: icons.stopsign}),
      L.marker([986.328238, 1328.641857], {icon: icons.stopsign}),
      L.marker([968.998856, 1339.723302], {icon: icons.stopsign}),
      L.marker([1005.675184, 1328.530193], {icon: icons.stopsign}),
      L.marker([1080.171875, 1339.625], {icon: icons.stopsign}),
      L.marker([1080.092624, 1272.088784], {icon: icons.stopsign}),
      L.marker([1081.158481, 1234.814835], {icon: icons.stopsign}),
      L.marker([1017.239396, 1189.287315], {icon: icons.stopsign}),
      L.marker([1005.669998, 1259.016597], {icon: icons.stopsign}),
      L.marker([928.519592, 1259.136206], {icon: icons.stopsign}),
      L.marker([900.359324, 1260.081494], {icon: icons.stopsign}),
      L.marker([912.012649, 1275.342349], {icon: icons.stopsign}),
      L.marker([846.464325, 1258.006472], {icon: icons.stopsign}),
      L.marker([857.720206, 1190.757063], {icon: icons.stopsign}),
      L.marker([859.566098, 1199.366812], {icon: icons.stopsign}),
      L.marker([939.563461, 1189.189972], {icon: icons.stopsign}),
      L.marker([620.342891, 1165.355134], {icon: icons.stopsign}),
      L.marker([610.272409, 1146.982251], {icon: icons.stopsign}),
      L.marker([248.140625, 521.859375], {icon: icons.stopsign}),
      L.marker([187.078125, 507.859375], {icon: icons.stopsign}),
      L.marker([139.100082, 426.18757], {icon: icons.stopsign}),
      L.marker([136.033019, 378.987413], {icon: icons.stopsign}),
      L.marker([121.65625, 375.8125], {icon: icons.stopsign}),
      L.marker([139.11814, 364.406605], {icon: icons.stopsign}),
      L.marker([145.224594, 359.769537], {icon: icons.stopsign}),
      L.marker([198.276105, 378.621747], {icon: icons.stopsign}),
      L.marker([200.109375, 474.796875], {icon: icons.stopsign}),
      L.marker([219.71875, 424.953125], {icon: icons.stopsign}),
      L.marker([214.891525, 439.530078], {icon: icons.stopsign}),
      L.marker([250.656013, 278.221829], {icon: icons.stopsign}),
      L.marker([199.234375, 284.53125], {icon: icons.stopsign}),
      L.marker([278.734375, 341.78125], {icon: icons.stopsign}),
      L.marker([279.084847, 399.450499], {icon: icons.stopsign}),
      L.marker([280.94649, 510.722058], {icon: icons.stopsign}),
      L.marker([328.280862, 507.752678], {icon: icons.stopsign}),
      L.marker([371.96875, 509.984375], {icon: icons.stopsign}),
      L.marker([481.393749, 521.786212], {icon: icons.stopsign}),
      L.marker([498.921875, 510.578125], {icon: icons.stopsign}),
      L.marker([522.171875, 468.28125], {icon: icons.stopsign}),
      L.marker([510.53125, 456.28125], {icon: icons.stopsign}),
      L.marker([520.78125, 371.859375], {icon: icons.stopsign}),
      L.marker([498.640625, 358.15625], {icon: icons.stopsign}),
      L.marker([469.540573, 301.296034], {icon: icons.stopsign}),
      L.marker([406.771522, 298.67312], {icon: icons.stopsign}),
      L.marker([430.171875, 283.078125], {icon: icons.stopsign}),
      L.marker([342.845266, 285.982722], {icon: icons.stopsign}),
      L.marker([325.205553, 297.614355], {icon: icons.stopsign}),
      L.marker([304, 285.03125], {icon: icons.stopsign}),
      L.marker([294.765625, 299.140625], {icon: icons.stopsign}),
      L.marker([482.992334, 480.163045], {icon: icons.stopsign}),
      L.marker([481.185099, 437.691076], {icon: icons.stopsign}),
      L.marker([482.75, 408.6875], {icon: icons.stopsign}),
      L.marker([327.657544, 230.416372], {icon: icons.stopsign}),
      L.marker([440.907739, 193.77489], {icon: icons.stopsign}),
      L.marker([443.1875, 201.875], {icon: icons.stopsign}),
      L.marker([464.015625, 195], {icon: icons.stopsign}),
      L.marker([553.094448, 247.488096], {icon: icons.stopsign}),
      L.marker([603.192275, 356.958014], {icon: icons.stopsign}),
      L.marker([623.132961, 370.832136], {icon: icons.stopsign}),
      L.marker([633.97075, 414.910302], {icon: icons.stopsign}),
      L.marker([662.824901, 437.183094], {icon: icons.stopsign}),
      L.marker([655.30574, 451.802754], {icon: icons.stopsign}),
      L.marker([464.40625, 439.359375], {icon: icons.stopsign}),
      L.marker([421.15625, 439.78125], {icon: icons.stopsign}),
      L.marker([427.34375, 523.671875], {icon: icons.stopsign}),
      L.marker([341.5625, 470.5], {icon: icons.stopsign}),
      L.marker([326.390625, 405.015625], {icon: icons.stopsign}),
      L.marker([341.484375, 325.46875], {icon: icons.stopsign}),
      L.marker([387.367796, 475.946316], {icon: icons.stopsign}),
      L.marker([402.552999, 473.950748], {icon: icons.stopsign}),
      L.marker([497.40625, 457.03125], {icon: icons.stopsign}),
      L.marker([596.871157, 320.228076], {icon: icons.stopsign}),
      L.marker([646.625, 159.25], {icon: icons.stopsign}),
      L.marker([653.076151, 144.892259], {icon: icons.stopsign}),
      L.marker([699.174607, 216.60447], {icon: icons.stopsign}),
      L.marker([687.298683, 358.328867], {icon: icons.stopsign}),
      L.marker([682.092879, 372.380109], {icon: icons.stopsign}),
      L.marker([808.693411, 370.946661], {icon: icons.stopsign}),
      L.marker([821.146267, 441.375396], {icon: icons.stopsign}),
      L.marker([811.758585, 522.375135], {icon: icons.stopsign}),
      L.marker([870.111314, 539.549039], {icon: icons.stopsign}),
      L.marker([908.190988, 453.104147], {icon: icons.stopsign}),
      L.marker([922.457141, 440.716223], {icon: icons.stopsign}),
      L.marker([909.781262, 312.717974], {icon: icons.stopsign}),
      L.marker([857.84508, 189.92667], {icon: icons.stopsign}),
      L.marker([820.602516, 301.894487], {icon: icons.stopsign}),
      L.marker([922.261192, 300.887175], {icon: icons.stopsign}),
      L.marker([340.142117, 715.641164], {icon: icons.stopsign}),
      L.marker([387.503819, 711.892723], {icon: icons.stopsign}),
      L.marker([404.603225, 763.923379], {icon: icons.stopsign}),
      L.marker([390.22429, 781.319131], {icon: icons.stopsign}),
      L.marker([402.614851, 798.467225], {icon: icons.stopsign}),
      L.marker([387.667048, 880.344257], {icon: icons.stopsign}),
      L.marker([404.192567, 888.768144], {icon: icons.stopsign}),
      L.marker([328.561665, 864.87895], {icon: icons.stopsign}),
      L.marker([199.599288, 785.316243], {icon: icons.stopsign}),
      L.marker([199.753181, 745.380996], {icon: icons.stopsign}),
      L.marker([328.910495, 780.594032], {icon: icons.stopsign}),
      L.marker([320.405334, 798.089366], {icon: icons.stopsign}),
      L.marker([340.276451, 800.144786], {icon: icons.stopsign}),
      L.marker([341.146006, 753.567161], {icon: icons.stopsign}),
      L.marker([444.187295, 796.909484], {icon: icons.stopsign}),
      L.marker([469.243278, 779.607215], {icon: icons.stopsign}),
      L.marker([481.849737, 712.980911], {icon: icons.stopsign}),
      L.marker([499.5, 698.9375], {icon: icons.stopsign}),
      L.marker([532.66885, 713.358964], {icon: icons.stopsign}),
      L.marker([635.395467, 739.428646], {icon: icons.stopsign}),
      L.marker([618.502271, 750.100026], {icon: icons.stopsign}),
      L.marker([634.801045, 847.66449], {icon: icons.stopsign}),
      L.marker([686.362394, 869.35349], {icon: icons.stopsign}),
      L.marker([684.379699, 921.136821], {icon: icons.stopsign}),
      L.marker([696.652751, 932.978799], {icon: icons.stopsign}),
      L.marker([635.013182, 1000.84675], {icon: icons.stopsign}),
      L.marker([623.491404, 1012.223357], {icon: icons.stopsign}),
      L.marker([549.439803, 998.811817], {icon: icons.stopsign}),
      L.marker([514.375, 999], {icon: icons.stopsign}),
      L.marker([388.430141, 934.623947], {icon: icons.stopsign}),
      L.marker([434.622369, 920.063127], {icon: icons.stopsign}),
      L.marker([452.404372, 935.015687], {icon: icons.stopsign}),
      L.marker([490.197189, 920.521706], {icon: icons.stopsign}),
      L.marker([588.875, 919.375], {icon: icons.stopsign}),
      L.marker([785.709675, 854.559782], {icon: icons.stopsign}),
      L.marker([809.904134, 850.18037], {icon: icons.stopsign}),
      L.marker([861.698261, 801.693115], {icon: icons.stopsign}),
      L.marker([853.183078, 774.851515], {icon: icons.stopsign}),
      L.marker([858.221258, 733.659281], {icon: icons.stopsign}),
      L.marker([622.692993, 921.094217], {icon: icons.stopsign}),
      L.marker([635.507998, 933.881724], {icon: icons.stopsign}),
      L.marker([591.436066, 125.997851], {icon: icons.stopsign}),
      L.marker([968.779717, 1187.706028], {icon: icons.stopsign}),
      L.marker([1098.75555, 858.029885], {icon: icons.stopsign}),
      // L.marker([100, 100], {icon: icons.stopsign}),
      // L.marker([100, 100], {icon: icons.stopsign}),
      // L.marker([100, 100], {icon: icons.stopsign}),
    ])
  },
  {
    id: 43,
    group_id: 2,
    name: "Yield Signs",
    icon: "Icons/yield-sign.png",
    layer: L.layerGroup([
      // L.marker([362.366688, 1127.57037], {icon: icons.yieldsign}),
      // L.marker([188.029877, 1082.408833], {icon: icons.yieldsign}),
      // L.marker([620.591202, 1123.903834], {icon: icons.yieldsign}),
      // L.marker([634.147255, 1088.016742], {icon: icons.yieldsign}),
      // L.marker([1114.654308, 1119.437524], {icon: icons.yieldsign}),
      // L.marker([809.283711, 1086.823123], {icon: icons.yieldsign}),
      L.marker([536.370338, 830.006355], {icon: icons.yieldsign}),
      L.marker([422.128641, 888.57848], {icon: icons.yieldsign}),
      L.marker([587.810486, 352.865776], {icon: icons.yieldsign}),
      L.marker([638.291335, 375.131976], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
      // L.marker([100, 100], {icon: icons.yieldsign}),
    ])
  },
  {
    id: 44,
    group_id: 2,
    name: "Bounty Man",
    icon: "Icons/bounty-man.png",
    layer: L.layerGroup([
      L.marker([624.548959, 1337.619422], {icon: icons.bountyman}),
    ])
  },
  {
    id: 45,
    group_id: 1,
    name: "Bigfoot",
    icon: "Icons/bounty-man.png",
    layer: L.layerGroup([
      L.marker([712.3125, 396.0625], {icon: icons.bigfoot}),
      L.marker([677.054743, 777.066158], {icon: icons.bigfoot}),
      L.marker([523.214824, 790.589576], {icon: icons.bigfoot}),
      L.marker([951.75, 471.1875], {icon: icons.bigfoot}),
      L.marker([668.28488, 195.820299], {icon: icons.bigfoot}),
    ])
  },
  {
    id: 46,
    group_id: 2,
    name: "ECU Hack",
    icon: "Icons/ecu-hack.png",
    layer: L.layerGroup([
      L.marker([379.461792, 323.444721], {icon: icons.ecuhack}),
    ])
  },
  {
    id: 47,
    sub_layer: true,
    icon: "Icons/speed-limit-sign-25-exit.png",
    cluster_radius: 65,
    layer: L.layerGroup([
      L.marker([1318.562124, 711.259663], {icon: icons.speedlimitsign25exit}),

      // L.marker([100, 100], {icon: icons.speedlimitsign25}),
      // L.marker([100, 100], {icon: icons.speedlimitsign25}),
      // L.marker([100, 100], {icon: icons.speedlimitsign25}),
    ])
  },
]

