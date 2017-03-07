(function(){
      //global_topbar 下划线跟随鼠标移动
      $.fn.extend({
        scrollNav : function(options){
          var defaults = {

          };
          var options = $.extend(defaults,options);
          var linkTimer,
          linkPanel = $(this),
          linkFocusStyle = linkPanel.find('.focus').prop('style');
          if(linkFocusStyle){
            linkPanel.delegate('li a', 'mouseenter', function(){
              var self = $(this);
              clearTimeout(linkTimer);
              linkFocusStyle.left = self.position().left + 'px';
              linkFocusStyle.width = self.innerWidth() + 'px';
            })
            .bind('mouseleave', function(){
              clearTimeout(linkTimer);
              linkTimer = setTimeout(function(){
                linkFocusStyle.left = '';
              }, 240);
            });
          }
        }
      });
    })(jQuery);
