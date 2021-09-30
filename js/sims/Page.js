Loader.addToManifest(Loader.manifestPreload,{
	splash_peep: "assets/splash/splash_peep.json",
	connection: "assets/splash/connection.json",
	cssAsset13: "assets/ui/sound.png",
    page1: "assets/pages/1_Marlagran_Fondo_Del_Mar.jpg"
});

function Page(config){

	var self = this;
	self.id = config.id;

	// Dimensions, yo
	var width = $("#main").clientWidth;
	var height = $("#main").clientHeight;
	var x = -(width-960)/2;
	var y = -(height-540)/2;

	// DOM
	self.dom = document.createElement("div");
	self.dom.className = "object";
	self.dom.style.left = x+"px";
	self.dom.style.top = y+"px";

    // Background
    self.dom = document.createElement("img");
    self.dom.className = "background";
    self.dom.src = config.background;

	///////////////////////////////////////////////
	///////////// ADD, REMOVE, KILL ///////////////
	///////////////////////////////////////////////

	// Add...
	self.add = function(){
        self.slideshow.page.appendChild(self.dom);
	};

	// Remove...
	self.remove = function(){
        self.slideshow.page.removeChild(self.dom);
	};

}
