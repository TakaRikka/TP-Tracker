$(document).ready(function () {

	var Souls = 0;
	var Bugs = 0;
	var Skills = 0;
	var Bag = 0;
	var HP = 0;
    var HC = 0;
    var Stamp = 0;
	var Quiver = 0;
	var Wallet = 0;
	var Scent = 0;
	var Clawshots = 0;
	var ClawType;



$(".item_icon_o").mousedown(function(event) {
    switch (event.which) {
        case 1:
            $(this).css('opacity', '1');
        break;

        case 3:
            $(this).css('opacity', '0.5');
        break;
    }
});

$("#PoeSouls").mousedown(function(event) {
    switch (event.which) {
        case 1:
            if(Souls < 60){
            	Souls += 1;
            }
            break;

        case 3:
            if(Souls > 0){
            	Souls -= 1;
            }
            break;
    }
		$("#soulsCounter").html(Souls);
});

	$("#GoldenBugs").mousedown(function(event) {
    switch (event.which) {
        case 1:
            if(Bugs < 24){
                Bugs += 1;
            }
            break;

        case 3:
            if(Bugs > 0){
                Bugs -= 1;
            }
            break;
    }
        $("#BugCounter").html(Bugs);
	});

	$("#Skills").mousedown(function(event) {
    switch (event.which) {
        case 1:
        	if(Skills < 7){
        		Skills += 1;
        	}
            break;

        case 3:
            if(Skills > 0){
            	Skills -= 1;
            }
            break;
    }
		$("#SkillCounter").html(Skills);
	});

$("#HeartPieces").mousedown(function(event){
    switch (event.which) {
        case 1:
            if(HP < 45){
                HP += 1;
            }
            break;

        case 3:
            if(HP > 0){
                HP -= 1;
            }
            break;
    }
        $("#HPCounter").html(HP);
    });

$("#HeartContainers").mousedown(function(event){
    switch (event.which) {
        case 1:
            if(HC < 8){
                HC += 1;
            }
            break;

        case 3:
            if(HC > 0){
                HC -= 1;
            }
            break;
    }
        $("#HCCounter").html(HC);
    });

$("#QuiverIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            if(Quiver < 3){
                Quiver += 1;
            }
            break;

        case 3:
            if(Quiver > 0){
                Quiver -= 1;
            }
            break;
    }
        if(Quiver < 1){
            this.src = "resources/items/Quiver.png";
            $(this).css('opacity', '0.5');
        }
        if(Quiver == 1){
            this.src = "resources/items/Quiver.png";
            $(this).css('opacity', '1');
        }
		if(Quiver == 2){
			this.src = "resources/items/BigQuiver.png";
		}
		if(Quiver >= 3){
			this.src = "resources/items/GiantQuiver.png";
		}
	});

$("#BagIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            if(Bag < 2){
                Bag += 1;
            }
            break;

        case 3:
            if(Bag > 0){
                Bag -= 1;
            }
            break;
    }
        if(Bag < 1){
            this.src = "resources/items/BombBag.png";
            $(this).css('opacity', '0.5');
        }
        if(Bag == 1){
            this.src = "resources/items/BombBag.png";
            $(this).css('opacity', '1');
        }
        if(Bag >= 2){
            this.src = "resources/items/GiantBombBag.png";
        }
    });

$("#WalletIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            if(Wallet < 3){
                Wallet += 1;
            }
            break;

        case 3:
            if(Wallet > 0){
                Wallet -= 1;
            }
            break;
    }
    	if(Wallet < 1){
    		this.src = "resources/items/Wallet.png";
    	}
		if(Wallet == 1){
			this.src = "resources/items/BigWallet.png";
		}
		if(Wallet >= 2){
			this.src = "resources/items/GiantWallet.png";
			Wallet = 2;
		}
	});

$("#ScentIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            if(Scent < 5){
                Scent += 1;
            }
            break;

        case 3:
            if(Scent > 0){
                Scent -= 1;
            }
            break;
    }
        if(Scent < 1){
            this.src = "resources/items/Yscent.png";
            $(this).css('opacity', '0.5');
        }
        if(Scent == 1){
            this.src = "resources/items/Yscent.png";
            $(this).css('opacity', '1');
        }
        if(Scent == 2){
            this.src = "resources/items/Iscent.png";
        }
        if(Scent == 3){
            this.src = "resources/items/Pscent.png";
        }
        if(Scent == 4){
            this.src = "resources/items/Rscent.png";
        }
        if(Scent >= 5){
            this.src = "resources/items/Mscent.png";
        }
    });

$("#Stamp").mousedown(function(event){
    switch (event.which) {
        case 1:
            if(Stamp < 50){
                Stamp += 1;
            }
            break;

        case 3:
            if(Stamp > 0){
                Stamp -= 1;
            }
            break;
    }
        $("#StampCounter").html(Stamp);
    });

$("#ClawIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
        	if(Clawshots < 2){
        		Clawshots += 1;
        	}
            break;
        case 3:
        	if(Clawshots > 0){
        		Clawshots -=1;
        	}
            break;
    }
    	if(Clawshots < 1){
    		this.src = "resources/items/Claw.png";
            $(this).css('opacity', '0.5');
    	}
		if(Clawshots == 1){
			this.src = "resources/items/Claw.png";
			$(this).css('opacity', '1');
		}
		if(Clawshots >= 2){
			this.src = "resources/items/DClaws.png";
		}
	});


$(".map-portal").mousedown(function(event){
    switch (event.which) {
        case 1:
            $(this).css('opacity', '1');
        break;

        case 3:
            $(this).css('opacity', '0.5');
        break;
    }    
});

});
