(function() {
var data = [{"t":0,"command":"create goroutine","name":"main"},
{"t":283774,"command":"create goroutine","name":"pool #19","parent":"main"},
{"t":552624,"command":"create goroutine","name":"worker #26","parent":"pool #19"},
{"t":628424,"command":"create goroutine","name":"worker #22","parent":"pool #19"},
{"t":657018,"command":"create goroutine","name":"worker #30","parent":"pool #19"},
{"t":739724,"command":"create goroutine","name":"worker #23","parent":"pool #19"},
{"t":781888,"command":"create goroutine","name":"worker #20","parent":"pool #19"},
{"t":797124,"command":"create goroutine","name":"worker #24","parent":"pool #19"},
{"t":808863,"command":"create goroutine","name":"worker #27","parent":"pool #19"},
{"t":847862,"command":"create goroutine","name":"worker #21","parent":"pool #19"},
{"t":854311,"command":"create goroutine","name":"worker #28","parent":"pool #19"},
{"t":867421,"command":"create goroutine","name":"worker #25","parent":"pool #19"},
{"t":911613,"command":"create goroutine","name":"worker #29","parent":"pool #19"},
{"t":930081,"command":"create goroutine","name":"worker #36","parent":"pool #19"},
{"t":942043,"command":"create goroutine","name":"worker #42","parent":"pool #19"},
{"t":962512,"command":"create goroutine","name":"worker #33","parent":"pool #19"},
{"t":982992,"command":"create goroutine","name":"worker #37","parent":"pool #19"},
{"t":1006520,"command":"create goroutine","name":"worker #31","parent":"pool #19"},
{"t":1026491,"command":"create goroutine","name":"worker #38","parent":"pool #19"},
{"t":1051223,"command":"create goroutine","name":"worker #32","parent":"pool #19"},
{"t":1069524,"command":"create goroutine","name":"worker #39","parent":"pool #19"},
{"t":1099408,"command":"create goroutine","name":"worker #49","parent":"pool #19"},
{"t":1506594,"command":"create goroutine","name":"worker #34","parent":"pool #19"},
{"t":1515290,"command":"create goroutine","name":"worker #43","parent":"pool #19"},
{"t":1517031,"command":"create goroutine","name":"worker #50","parent":"pool #19"},
{"t":1550308,"command":"create goroutine","name":"worker #40","parent":"pool #19"},
{"t":1560421,"command":"create goroutine","name":"worker #35","parent":"pool #19"},
{"t":1565182,"command":"create goroutine","name":"worker #44","parent":"pool #19"},
{"t":1603941,"command":"create goroutine","name":"worker #41","parent":"pool #19"},
{"t":1626013,"command":"create goroutine","name":"worker #51","parent":"pool #19"},
{"t":1632960,"command":"create goroutine","name":"worker #47","parent":"pool #19"},
{"t":1650801,"command":"create goroutine","name":"worker #53","parent":"pool #19"},
{"t":1651341,"command":"create goroutine","name":"worker #46","parent":"pool #19"},
{"t":1672971,"command":"create goroutine","name":"worker #54","parent":"pool #19"},
{"t":1700054,"command":"create goroutine","name":"worker #52","parent":"pool #19"},
{"t":1707020,"command":"create goroutine","name":"worker #48","parent":"pool #19"},
{"t":1720590,"command":"create goroutine","name":"worker #55","parent":"pool #19"},
{"t":1720684,"command":"create goroutine","name":"worker #45","parent":"pool #19"},
{"t":118603595,"command":"send to channel","from":"pool #19","to":"worker #26","ch":"tasks","value":0,"duration":108362},
{"t":223141381,"command":"send to channel","from":"pool #19","to":"worker #22","ch":"tasks","value":1,"duration":128593},
{"t":327568158,"command":"send to channel","from":"pool #19","to":"worker #23","ch":"tasks","value":2,"duration":102812},
{"t":432047704,"command":"send to channel","from":"pool #19","to":"worker #30","ch":"tasks","value":3,"duration":96183},
{"t":536580368,"command":"send to channel","from":"pool #19","to":"worker #20","ch":"tasks","value":4,"duration":89810},
{"t":641185059,"command":"send to channel","from":"pool #19","to":"worker #27","ch":"tasks","value":5,"duration":201022},
{"t":745430577,"command":"send to channel","from":"pool #19","to":"worker #24","ch":"tasks","value":6,"duration":78669},
{"t":850055684,"command":"send to channel","from":"pool #19","to":"worker #28","ch":"tasks","value":7,"duration":128797},
{"t":955110616,"command":"send to channel","from":"pool #19","to":"worker #25","ch":"tasks","value":8,"duration":122749},
{"t":1059064178,"command":"send to channel","from":"pool #19","to":"worker #21","ch":"tasks","value":9,"duration":123143},
{"t":1163465725,"command":"send to channel","from":"pool #19","to":"worker #29","ch":"tasks","value":10,"duration":102337},
{"t":1264727784,"command":"send to channel","from":"pool #19","to":"worker #36","ch":"tasks","value":11,"duration":171714},
{"t":1365716758,"command":"send to channel","from":"pool #19","to":"worker #42","ch":"tasks","value":12,"duration":137276},
{"t":1466005967,"command":"send to channel","from":"pool #19","to":"worker #33","ch":"tasks","value":13,"duration":79762},
{"t":1566313709,"command":"send to channel","from":"pool #19","to":"worker #37","ch":"tasks","value":14,"duration":105692},
{"t":1666570770,"command":"send to channel","from":"pool #19","to":"worker #31","ch":"tasks","value":15,"duration":142010},
{"t":1767145369,"command":"send to channel","from":"pool #19","to":"worker #38","ch":"tasks","value":16,"duration":102005},
{"t":1867857032,"command":"send to channel","from":"pool #19","to":"worker #32","ch":"tasks","value":17,"duration":73218},
{"t":1968357800,"command":"send to channel","from":"pool #19","to":"worker #39","ch":"tasks","value":18,"duration":137882},
{"t":2069057583,"command":"send to channel","from":"pool #19","to":"worker #49","ch":"tasks","value":19,"duration":100275},
{"t":2170294491,"command":"send to channel","from":"pool #19","to":"worker #34","ch":"tasks","value":20,"duration":119029},
{"t":2270506574,"command":"send to channel","from":"pool #19","to":"worker #43","ch":"tasks","value":21,"duration":111220},
{"t":2370869326,"command":"send to channel","from":"pool #19","to":"worker #50","ch":"tasks","value":22,"duration":116101},
{"t":2471297383,"command":"send to channel","from":"pool #19","to":"worker #40","ch":"tasks","value":23,"duration":75410},
{"t":2572511644,"command":"send to channel","from":"pool #19","to":"worker #35","ch":"tasks","value":24,"duration":135323},
{"t":2672775061,"command":"send to channel","from":"pool #19","to":"worker #44","ch":"tasks","value":25,"duration":79124},
{"t":2773711774,"command":"send to channel","from":"pool #19","to":"worker #41","ch":"tasks","value":26,"duration":165017},
{"t":2874911030,"command":"send to channel","from":"pool #19","to":"worker #51","ch":"tasks","value":27,"duration":89034},
{"t":2975334129,"command":"send to channel","from":"pool #19","to":"worker #47","ch":"tasks","value":28,"duration":108463},
{"t":3076555902,"command":"send to channel","from":"pool #19","to":"worker #53","ch":"tasks","value":29,"duration":129437},
{"t":3177677971,"command":"send to channel","from":"pool #19","to":"worker #46","ch":"tasks","value":30,"duration":129613},
{"t":3278654683,"command":"send to channel","from":"pool #19","to":"worker #54","ch":"tasks","value":31,"duration":79249},
{"t":3379907043,"command":"send to channel","from":"pool #19","to":"worker #52","ch":"tasks","value":32,"duration":199125},
{"t":3480695001,"command":"send to channel","from":"pool #19","to":"worker #48","ch":"tasks","value":33,"duration":130732},
{"t":3581863342,"command":"send to channel","from":"pool #19","to":"worker #55","ch":"tasks","value":34,"duration":135256},
{"t":3682951163,"command":"send to channel","from":"pool #19","to":"worker #45","ch":"tasks","value":35,"duration":191677},
{"t":3784312568,"command":"send to channel","from":"pool #19","to":"worker #26","ch":"tasks","value":36,"duration":130340},
{"t":3885448226,"command":"send to channel","from":"pool #19","to":"worker #22","ch":"tasks","value":37,"duration":109370},
{"t":3986735646,"command":"send to channel","from":"pool #19","to":"worker #23","ch":"tasks","value":38,"duration":100057},
{"t":4087732570,"command":"send to channel","from":"pool #19","to":"worker #30","ch":"tasks","value":39,"duration":107259},
{"t":4188934193,"command":"send to channel","from":"pool #19","to":"worker #20","ch":"tasks","value":40,"duration":143127},
{"t":4290212099,"command":"send to channel","from":"pool #19","to":"worker #27","ch":"tasks","value":41,"duration":144195},
{"t":4391038299,"command":"send to channel","from":"pool #19","to":"worker #24","ch":"tasks","value":42,"duration":95747},
{"t":4491254403,"command":"send to channel","from":"pool #19","to":"worker #28","ch":"tasks","value":43,"duration":133214},
{"t":4592461746,"command":"send to channel","from":"pool #19","to":"worker #25","ch":"tasks","value":44,"duration":121600},
{"t":4692906167,"command":"send to channel","from":"pool #19","to":"worker #21","ch":"tasks","value":45,"duration":134485},
{"t":4794192590,"command":"send to channel","from":"pool #19","to":"worker #29","ch":"tasks","value":46,"duration":190033},
{"t":4895320558,"command":"send to channel","from":"pool #19","to":"worker #36","ch":"tasks","value":47,"duration":174539},
{"t":4996517391,"command":"send to channel","from":"pool #19","to":"worker #42","ch":"tasks","value":48,"duration":80541},
{"t":5097654446,"command":"send to channel","from":"pool #19","to":"worker #33","ch":"tasks","value":49,"duration":300628},
{"t":5097717058,"command":"stop goroutine","name":"pool #19"},
{"t":5097790008,"command":"stop goroutine","name":"worker #46"},
{"t":5097813691,"command":"stop goroutine","name":"worker #42"},
{"t":5097856399,"command":"stop goroutine","name":"worker #43"},
{"t":5097861453,"command":"stop goroutine","name":"worker #38"},
{"t":5097880253,"command":"stop goroutine","name":"worker #50"},
{"t":5097914980,"command":"stop goroutine","name":"worker #54"},
{"t":5097963911,"command":"stop goroutine","name":"worker #40"},
{"t":5097991201,"command":"stop goroutine","name":"worker #52"},
{"t":5097996917,"command":"stop goroutine","name":"worker #32"},
{"t":5098017820,"command":"stop goroutine","name":"worker #35"},
{"t":5098044044,"command":"stop goroutine","name":"worker #48"},
{"t":5098066359,"command":"stop goroutine","name":"worker #39"},
{"t":5098068137,"command":"stop goroutine","name":"worker #44"},
{"t":5098095557,"command":"stop goroutine","name":"worker #55"},
{"t":5098114183,"command":"stop goroutine","name":"worker #49"},
{"t":5098141805,"command":"stop goroutine","name":"worker #41"},
{"t":5098160811,"command":"stop goroutine","name":"worker #45"},
{"t":5098177917,"command":"stop goroutine","name":"worker #34"},
{"t":5098206077,"command":"stop goroutine","name":"worker #26"},
{"t":5098232338,"command":"stop goroutine","name":"worker #24"},
{"t":5098243671,"command":"stop goroutine","name":"worker #37"},
{"t":5098267380,"command":"stop goroutine","name":"worker #28"},
{"t":5098282305,"command":"stop goroutine","name":"worker #22"},
{"t":5098295415,"command":"stop goroutine","name":"worker #31"},
{"t":5098327655,"command":"stop goroutine","name":"worker #51"},
{"t":5098351737,"command":"stop goroutine","name":"worker #25"},
{"t":5098353154,"command":"stop goroutine","name":"worker #23"},
{"t":5098399208,"command":"stop goroutine","name":"worker #53"},
{"t":5098404305,"command":"stop goroutine","name":"worker #30"},
{"t":5098409810,"command":"stop goroutine","name":"worker #21"},
{"t":5098444999,"command":"stop goroutine","name":"worker #20"},
{"t":5098454663,"command":"stop goroutine","name":"worker #27"},
{"t":5098460916,"command":"stop goroutine","name":"worker #29"},
{"t":5098490771,"command":"stop goroutine","name":"worker #36"},
{"t":5098513899,"command":"stop goroutine","name":"worker #47"},
{"t":5151105089,"command":"stop goroutine","name":"worker #33"},
{"t":5151125983,"command":"stop goroutine","name":"main"}];

	window.samples.workers01 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				width: 1200,
				height: 600,
				camera: "perspective",
				allCaps: false,
				speed: 1.3,
				angle: 10,
				zoom: 1.0,
				autoAngle: false,
				distance: 80,
				cameraPos: {x: 110, y: 60, z: 160}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

