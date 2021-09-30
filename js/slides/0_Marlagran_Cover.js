/********************

0. Introduction
1. One Game
2. Repeated Game
3. One Tournament
4. Repeated Tournament
5. Making Mistaeks
6. Sandbox
7. Conclusion
X. Credits

Labels should be in the en.html folder

*********************/

Loader.addToManifest(Loader.manifest,{

	// CSS ASSETS
	cssAsset0: "assets/ui/button.png",
	cssAsset1: "assets/ui/button_short.png",
	cssAsset2: "assets/ui/button_long.png",
	cssAsset3: "assets/ui/sandbox_tabs.png",
	cssAsset4: "assets/ui/sandbox_incdec.png",
	cssAsset5: "assets/ui/slider_bg.png",
	cssAsset6: "assets/ui/slider_knob.png",
	cssAsset7: "assets/ui/sandbox_hats.png",
	cssAsset8: "assets/ui/scratch.png",
	cssAsset9: "assets/iterated/iterated_scoreboard.png",
	cssAsset10: "assets/tournament/peep_characters.png",
	cssAsset11: "assets/ui/sandbox_hats.png",
	cssAsset12: "assets/tournament/score_small.png",

	// Music!
	bg_music: "assets/sounds/bg_music.mp3",

	// IMAGE BOXES
	image1: "assets/evolution/evolution_intro.png",
	image2: "assets/conclusion/summary.png",

});

PAGES = {
    // page1: "assets/pages/1_Marlagran_Fondo_Del_Mar.jpg",
    page2: "assets/pages/2_Marlagran_Swims_text.jpg",
    page3: "assets/pages/3_Marlagran_Swims.jpg",
    page4: "assets/pages/4_retrato_familiar_text.jpg",
    page5: "assets/pages/5_retrato_familiar.jpg",
    page6: "assets/pages/6_Town_Marlagran_text.jpg",
    page7: "assets/pages/7_Town_Marlagran 2.jpg",
    page8: "assets/pages/8_Marlagran_Head_text 2.jpg",
    page9: "assets/pages/9_Marlagran_Head 2.jpg",
    page10: "assets/pages/10_M_Walks_On_The_beach copy.jpg",
    page11: "assets/pages/11_M_Walks_On_The_beach .jpg",
    page12: "assets/pages/12_Map.jpg",
    page13: "assets/pages/13_Map.jpg",
    page14: "assets/pages/14_Draw_Drapajaro_text.jpg",
    page15: "assets/pages/15_Draw_Drapajaro 2.jpg",
    page16: "assets/pages/16_M_Looks_Back_text.jpg",
    page17: "assets/pages/17_M_Looks_Back 3.jpg",
    page18: "assets/pages/18_Animal_redondo.jpg",
    page19: "assets/pages/19_animalRedondo_text.jpg",
    page20: "assets/pages/20_Atril_Y_Redondo 2.jpg",
    page21: "assets/pages/21_Grumpy_Marlagran.jpg",
    page22: "assets/pages/22_Marlagran_Piensa.jpg",
    page23: "assets/pages/23_Marlagran_Cries.jpg",
    page24: "assets/pages/24_The_Force_text.jpg",
    page25: "assets/pages/25_The_Force 2.jpg",
    page26: "assets/pages/26_Marlagran_Dance_text.jpg",
    page27: "assets/pages/27_Marlagran_Dance 2.jpg",
    page28: "assets/pages/28_Cuandonestas_Feliz 3.jpg",
    page29: "assets/pages/29_Cuandonestas_Feliz_text.jpg",
    page30: "assets/pages/30_Paisaje_ 3.jpg",
    page31: "assets/pages/31_paisaje.jpg",
    page32: "assets/pages/32_Creas_text 1.jpg",
    page33: "assets/pages/33_Creas_1.jpg",
    page34: "assets/pages/34_Creas 3.jpg",
    page35: "assets/pages/35_Creas_text.jpg",
    page36: "assets/pages/36_M_Fiesta_text.jpg",
    page37: "assets/pages/37_M_Fiesta_ 2.jpg",
    page38: "assets/pages/38_Techos_Bailables 2.jpg",
    page39: "assets/pages/39_Techos_Bailables_text.jpg",
    page41: "assets/pages/41.Taller.jpg",
    page42: "assets/pages/42_Colorea_Paisaje-1.jpg",
    page43: "assets/pages/43_Colorea_Paisaje_2.jpg",
    page44: "assets/pages/44_colorin_Colorado.jpg",
    page45: "assets/pages/Backcover.jpg",
};

Loader.addToManifest(Loader.manifest, PAGES);

SLIDES.push({

	id: "page1",
	onstart: function(self){

		var o = self.objects;

		// Splash in background
		self.add({ id:"page", type:"Page",
            background: "assets/pages/1_Marlagran_Fondo_Del_Mar.jpg",
        });

        // Button
		self.add({
			id:"loading_button", type:"Button", hud:true, x2:220, y2:80,
			text_id:self.loaded ? "label_next" : "loading",
			active:self.loaded,
            onclick:() => publish("slideshow/scratch"),
		});
		var _loadingWords = function(ratio){
			ratio = Math.round(ratio*100);
			o.loading_button.setText2(Words.get("loading")+" "+ratio+"%");
		};

		// PRELOADER
		listen(self,"preloader/progress", function(ratio){
			_loadingWords(ratio);
		});
		listen(self,"preloader/done", function(){
            self.loaded = true;
			o.loading_button.setText("label_next");
			o.loading_button.activate();
			o.loading_button.config.onclick = function(){
				publish("start/game");
				Loader.sounds.bg_music.volume(0.75).loop(true).play(); // play music!
			};
		});

	},
	onend: function(self){
		unlisten(self);
		self.clear();
	}

});

for (let i = 2; i <= 45; ++i) {
    let slideId = "page" + i;
    let previousSlideId = "page" + (i - 1);
    SLIDES.push({

        id: slideId,
        onstart: function(self){

            var o = self.objects;

            // Splash in background
            self.add({ id:"page", type:"Page",
                background: PAGES[slideId],
            });

            // Previous Slide Button
            self.add({
                id:"nextButton", type:"Button", hud:true, x:40, y2:80,
                text_id:"label_previous",
                onclick: () => {
                    publish("slideshow/scratch", [previousSlideId]);
                },
            });

            // Next Slide Button
            if (i != 45)
            self.add({
                id:"prevButton", type:"Button", hud:true, x2:220, y2:80,
                text_id:"label_next",
                onclick: () => {
                    publish("slideshow/scratch");
                },
            });

        },
        onend: function(self){
            self.clear();
        }

    });

}
