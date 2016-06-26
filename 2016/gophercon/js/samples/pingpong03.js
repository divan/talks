(function() {

	var data = [{"t":-94405,"command":"create goroutine","name":"main"},
	{"t":234205,"command":"send to channel","from":"main","to":"player #5","ch":"table","value":0,"duration":125992},
	{"t":328610,"command":"create goroutine","name":"player #5","parent":"main"},
	{"t":337795,"command":"create goroutine","name":"player #3","parent":"main"},
	{"t":365479,"command":"create goroutine","name":"player #4","parent":"main"},
	{"t":100677630,"command":"send to channel","from":"player #5","to":"player #4","ch":"table","value":1,"duration":216447},
	{"t":201625164,"command":"send to channel","from":"player #4","to":"player #3","ch":"table","value":2,"duration":134540},
	{"t":305940577,"command":"send to channel","from":"player #3","to":"player #5","ch":"table","value":3,"duration":118930},
	{"t":410455934,"command":"send to channel","from":"player #5","to":"player #4","ch":"table","value":4,"duration":95700},
	{"t":515011425,"command":"send to channel","from":"player #4","to":"player #3","ch":"table","value":5,"duration":142719},
	{"t":619446810,"command":"send to channel","from":"player #3","to":"player #5","ch":"table","value":6,"duration":111380},
	{"t":724694735,"command":"send to channel","from":"player #5","to":"player #4","ch":"table","value":7,"duration":130000},
	{"t":828332630,"command":"send to channel","from":"player #4","to":"player #3","ch":"table","value":8,"duration":101137},
	{"t":932963750,"command":"send to channel","from":"player #3","to":"player #5","ch":"table","value":9,"duration":142297},
	{"t":1037477300,"command":"send to channel","from":"player #5","to":"player #4","ch":"table","value":10,"duration":104410},
	{"t":1141991500,"command":"send to channel","from":"player #4","to":"player #3","ch":"table","value":11,"duration":130517},
	{"t":1246410527,"command":"send to channel","from":"player #3","to":"player #5","ch":"table","value":12,"duration":96533},
	{"t":1350854926,"command":"send to channel","from":"player #5","to":"player #4","ch":"table","value":13,"duration":79449},
	{"t":1455458104,"command":"send to channel","from":"player #4","to":"player #3","ch":"table","value":14,"duration":103683},
	{"t":1559915890,"command":"send to channel","from":"player #3","to":"player #5","ch":"table","value":15,"duration":133400},
	{"t":1664411665,"command":"send to channel","from":"player #5","to":"player #4","ch":"table","value":16,"duration":108869},
	{"t":1768865575,"command":"send to channel","from":"player #4","to":"player #3","ch":"table","value":17,"duration":175182},
	{"t":1873312264,"command":"send to channel","from":"player #3","to":"player #5","ch":"table","value":18,"duration":117806},
	{"t":1977815344,"command":"send to channel","from":"player #5","to":"player #4","ch":"table","value":19,"duration":100776},
	{"t":2082295460,"command":"send to channel","from":"player #4","to":"player #3","ch":"table","value":20,"duration":165450},
	{"t":2186712360,"command":"send to channel","from":"player #3","to":"player #5","ch":"table","value":21,"duration":98964},
	{"t":2291295425,"command":"send to channel","from":"player #5","to":"main","ch":"table","value":22,"duration":121299},
	{"t":2291445750,"command":"stop goroutine","name":"main"}];

	window.samples.pingpong03 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				width: 900,
				height: 600,
				camera: "ortho",
				allCaps: true,
				speed: 1.0,
				angle: 120,
				zoom: 1.1,
				cameraPos: {x: 120, y: 60, z: 120}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

