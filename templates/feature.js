(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['feature.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.featureStyle || (depth0 != null ? depth0.featureStyle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"featureStyle","hash":{},"data":data}) : helper)))
    + " feature\">\r\n    <div class=\"content\">\r\n        <div class=\"content-heading\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.contentHeading || (depth0 != null ? depth0.contentHeading : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentHeading","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"content-icon\">\r\n            "
    + ((stack1 = ((helper = (helper = helpers.contentIcon || (depth0 != null ? depth0.contentIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentIcon","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n        <div class=\"content-info\">\r\n            <p>"
    + alias4(((helper = (helper = helpers.contentInfo || (depth0 != null ? depth0.contentInfo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentInfo","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n        <div class=\"content-learn-button\">\r\n            <p>Learn more</p>\r\n            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"blue-bar\">\r\n    </div>\r\n</div>";
},"useData":true});
})();