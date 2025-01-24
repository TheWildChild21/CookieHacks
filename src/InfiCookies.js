(function() {
    function getABunchOfCookies() {
        Game.cookies = Game.cookies * 99999999;
        
        Game.UpdateMenu();

        console.log("You just got a bunch of cookies!")
    }
    
    setInterval(getABunchOfCookies, 1000);
})();