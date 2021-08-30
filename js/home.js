$(document).ready(function() {
    $arsha = $("#arsha") , $pageContent = $arsha.children("#page-content"),
    $carousel = $pageContent.children("#carousel"),
    $features = $pageContent.find("#features"),
    $teamMembers = $pageContent.find("#team-members"),
    $prevButton = $carousel.find("#carousel-previous-button"),
    $nextButton = $carousel.find("#carousel-next-button"),
    currentSlide = 0,
    arshaData = {}, features = [], team = [];

    getJSONData();
    function getJSONData() {
        $.ajax({
            url: "../data/json/arsha.json",
            success: function(result) {
                arshaData = result.arsha;
                features = arshaData.features;
                team = arshaData.team;
                addFeatures();
                addTeam();
            }
        });  
    }

    function addFeatures() {
        var i, n = features.length, heading, icon, info, featureClass, id,
            html, context;

        for(i = 0; i < n; i++) {
            if(i < 3) {
                featureClass = "feature-3";
            }
            else {
                featureClass = "feature-2";
            }
            id = "feature-id-" + (i + 1);
            heading = features[i].heading;
            icon = features[i].icon;
            info = features[i].info;
            context = {id: id, featureStyle: featureClass, contentHeading: heading, contentIcon: icon, contentInfo: info};
            html = Handlebars.templates['feature.hbs'](context);
            $features.append(html);
        }
    }

    function addTeam() {
        var i, n = team.length, name, icon, picUrl, info, className, id,
            html, context;

        for(i = 0; i < n; i++) {
            id = "team-member-" + (i+1);
            name = team[i].name;
            icon = team[i].icon;
            picUrl = team[i].imageUrl;
            info = team[i].info;
            className = "team-members-class-3";
            context = {id: id, className: className, name: name, icon: icon, url: picUrl, info: info, className: className};
            html = Handlebars.templates['team-member.hbs'](context);
            $teamMembers.append(html);
        }
        $(window).trigger('resize');
    }

    $prevButton.click(function() {
        changeSlide(-1);
        console.log("Previous Clicked");
    });

    $nextButton.click(function() {
        changeSlide(1);
        console.log("Next Clicked");
    });

    function changeSlide(difference) {
        $($carousel.find(".carousel-item")[currentSlide]).removeClass("selected");
        if(currentSlide == 0 && difference == -1) {
            currentSlide = 2;
        }
        else {
            currentSlide = (currentSlide + difference) % 3;
        }
        $($carousel.find(".carousel-item")[currentSlide]).addClass("selected");
        $(window).trigger('resize');
    }

    $(window).resize(function() {
        var $currentSlide = $($carousel.find(".carousel-item")[currentSlide]),
                width = $currentSlide.width(), 
                windowWidth = $('body').width();

        if(windowWidth >= 1190) {
            $carousel.height("");
            $currentSlide.height("");
            $features.find("#feature-id-1").addClass("feature-3");
            $features.find("#feature-id-2").addClass("feature-3");
            $features.find("#feature-id-3").addClass("feature-3");
            $features.find("#feature-id-4").addClass("feature-2");
            $features.find("#feature-id-5").addClass("feature-2");
        }
        else {
            $carousel.height(width / (15/7));
            $currentSlide.height(width / (15/7));
            $features.find("#feature-id-1").removeClass("feature-3");
            $features.find("#feature-id-2").removeClass("feature-3");
            $features.find("#feature-id-3").removeClass("feature-3");
            $features.find("#feature-id-4").removeClass("feature-2");
            $features.find("#feature-id-5").removeClass("feature-2");
        }
    });
});