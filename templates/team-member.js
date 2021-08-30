(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['team-member.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"team-member-content\">\r\n        <div class=\"team-member-name\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"team-member-icon\">\r\n            "
    + ((stack1 = ((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n        <div class=\"team-member-pic\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"/>\r\n        </div>\r\n        <div class=\"team-member-info\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"info","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"content-learn-button\">\r\n            <p>Learn more</p>\r\n            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"blue-bar\">\r\n    </div>\r\n</div>";
},"useData":true});
})();