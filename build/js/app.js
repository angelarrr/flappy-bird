!function i(t,n,s){function e(c,p){if(!n[c]){if(!t[c]){var r="function"==typeof require&&require;if(!p&&r)return r(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var a=n[c]={exports:{}};t[c][0].call(a.exports,function(i){var n=t[c][1][i];return e(n?n:i)},a,a.exports,i,t,n,s)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<s.length;c++)e(s[c]);return e}({1:[function(i,t,n){var s=function(i,t){this.entity=i,this.radius=t,this.type="circle"};s.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},s.prototype.collideCircle=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,s=this.radius,e=i.components.collision.radius,o={x:t.x-n.x,y:t.y-n.y},c=o.x*o.x+o.y*o.y,p=s+e;return p*p>c},s.prototype.collideRect=function(i){var t=function(i,t,n){return t>i?t:i>n?n:i},n=this.entity.components.physics.position,s=i.components.physics.position,e=i.components.collision.size,o={x:t(n.x,s.x-e.x/2,s.x+e.x/2),y:t(n.y,s.y-e.y/2,s.y+e.y/2)},c=this.radius,p={x:n.x-o.x,y:n.y-o.y},r=p.x*p.x+p.y*p.y;return c*c>r},n.CircleCollisionComponent=s},{}],2:[function(i,t,n){var s=function(i,t){this.entity=i,this.size=t,this.type="rect"};s.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},s.prototype.collideCircle=function(i){return i.components.collision.collideRect(this.entity)},s.prototype.collideRect=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,s=this.size,e=i.components.collision.size,o=t.x-s.x/2,c=t.x+s.x/2,p=t.y-s.y/2,r=t.y+s.y/2,h=n.x-e.x/2,a=n.x+e.x/2,l=n.y-e.y/2,y=n.y+e.y/2;return!(o>a||h>c||p>y||l>r)},n.RectCollisionComponent=s},{}],3:[function(i,t,n){var s=function(i){this.entity=i,this.radius=.07,this.image=new Image,this.image.src="img/bird.png"};s.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.arc(0,0,.02,0,2*Math.PI),i.fillStyle="yellow",i.fill(),i.closePath(),i.restore()},n.BirdGraphicsComponent=s},{}],4:[function(i,t,n){var s=function(i,t){this.entity=i,this.size=t},e=function(i){return i%2==0?!0:!1},o=0;s.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y);var n=new Image;n.src="img/pipe.png",e(o)?i.scale(1,-1):i.scale(1,1),o++,i.drawImage(n,-this.size.x/2,-this.size.y/2,this.size.x,this.size.y),i.restore()},n.PipeGraphicsComponent=s},{}],5:[function(i,t,n){var s=function(i,t){this.entity=i,this.size=t};s.prototype.draw=function(i){var t=this.entity.components.physics.position,n=this.entity.color;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle=n,i.fillRect(-this.size.x/2,-this.size.y/2,this.size.x,this.size.y),i.closePath(),i.restore()},n.RectGraphicsComponent=s},{}],6:[function(i,t,n){var s=function(i){this.entity=i,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};s.prototype.update=function(i){this.velocity.x+=this.acceleration.x*i,this.velocity.y+=this.acceleration.y*i,this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i},n.PhysicsComponent=s},{}],7:[function(i,t,n){var s=i("../components/physics/physics"),e=i("../components/graphics/bird"),o=i("../components/collision/circle"),c=(i("../systems/graphics"),i("../systems/pipe"),function(){var i=new s.PhysicsComponent(this);i.position.y=.5,i.acceleration.y=-2;var t=new e.BirdGraphicsComponent(this),n=new o.CircleCollisionComponent(this,.02);n.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:n}});c.prototype.onCollision=function(i){this.components.physics.position.y=.5,this.components.physics.position.x=0,this.components.physics.velocity.y=0},n.Bird=c},{"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":6,"../systems/graphics":17,"../systems/pipe":20}],8:[function(i,t,n){var s=i("../components/graphics/rect"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(){this.color="#87CEFA";var i={x:document.getElementById("main-canvas").width,y:.01},t=new e.PhysicsComponent(this);t.position.x=0,t.position.y=1;var n=new s.RectGraphicsComponent(this,i),c=new o.RectCollisionComponent(this,i);this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.Ceiling=c},{"../components/collision/rect":2,"../components/graphics/rect":5,"../components/physics/physics":6}],9:[function(i,t,n){var s=i("../components/graphics/rect"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(){this.color="brown";var i={x:document.getElementById("main-canvas").width,y:.01},t=new e.PhysicsComponent(this);t.position.x=0,t.position.y=0;var n=new s.RectGraphicsComponent(this,i),c=new o.RectCollisionComponent(this,i);this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.Floor=c},{"../components/collision/rect":2,"../components/graphics/rect":5,"../components/physics/physics":6}],10:[function(i,t,n){var s=i("../components/graphics/pipe"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(i,t){var n=new e.PhysicsComponent(this);n.position=i,n.velocity.x=-.4;var c=new s.PipeGraphicsComponent(this,t),p=new o.RectCollisionComponent(this,t);p.onCollision=this.onCollision.bind(this),this.components={physics:n,graphics:c,collision:p}};c.prototype.onCollision=function(i){},n.Pipe=c},{"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":6}],11:[function(i,t,n){var s=i("../components/graphics/rect"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(){this.color="white";var i={x:.01,y:document.getElementById("main-canvas").height},t=new e.PhysicsComponent(this);t.position.x=-(document.getElementById("main-canvas").width/200),t.position.y=.02;var n=new s.RectGraphicsComponent(this,i),c=new o.RectCollisionComponent(this,i);c.onCollision=this.onCollision.bind(this),this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.PipeGarbage=c},{"../components/collision/rect":2,"../components/graphics/rect":5,"../components/physics/physics":6}],12:[function(i,t,n){var s=i("../components/graphics/rect"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(){this.color="#87CEFA";var i={x:1e-4,y:1},t=new e.PhysicsComponent(this);t.position.x=-.25,t.position.y=0;var n=new s.RectGraphicsComponent(this,i),c=new o.RectCollisionComponent(this,i);c.onCollision=this.onCollision.bind(this),this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.ScoreKeeper=c},{"../components/collision/rect":2,"../components/graphics/rect":5,"../components/physics/physics":6}],13:[function(i,t,n){var s=i("./systems/graphics"),e=i("./systems/physics"),o=i("./systems/input"),c=i("./systems/pipe"),p=(i("./systems/score"),i("./entities/bird")),r=i("./entities/floor"),h=i("./entities/ceiling"),a=i("./entities/pipeGarbage"),l=i("./entities/score"),y=function(){this.entities=[new p.Bird,new r.Floor,new h.Ceiling,new a.PipeGarbage,new l.ScoreKeeper],this.graphics=new s.GraphicsSystem(this.entities),this.physics=new e.PhysicsSystem(this.entities),this.inputs=new o.InputSystem(this.entities),this.pipes=new c.PipeSystem(this.entities)};y.prototype.run=function(){this.graphics.run(),this.physics.run(),this.inputs.run(),this.pipes.run()},n.FlappyBird=y},{"./entities/bird":7,"./entities/ceiling":8,"./entities/floor":9,"./entities/pipeGarbage":11,"./entities/score":12,"./systems/graphics":17,"./systems/input":18,"./systems/physics":19,"./systems/pipe":20,"./systems/score":21}],14:[function(i,t,n){var s=i("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var i=document.getElementById("start"),t=document.getElementById("game-start"),n=(document.getElementById("restart"),new s.FlappyBird);i.addEventListener("click",function(){n.run(),t.style.visibility="hidden"}),i.addEventListener("touchstart",function(){n.run(),t.style.visibility="hidden"})})},{"./flappy_bird":13}],15:[function(i,t,n){n.pipeWidth=.2,n.pipeGap=.25},{}],16:[function(i,t,n){var s=i("../entities/bird"),e=i("../entities/pipe"),o=i("../entities/pipeGarbage"),c=i("./score"),p=i("../entities/score"),r=function(i){this.entities=i,this.scoreSystem=new c.ScoreSystem};r.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},r.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];if(!(!1 in t.components))for(var n=i+1;n<this.entities.length;n++){var c=this.entities[n];!1 in c.components||t.components.collision.collidesWith(c)&&(t.components.collision.onCollision&&(t.components.collision.onCollision(c),t instanceof s.Bird&&(this.entities.splice(5,this.entities.length-5),this.scoreSystem.resetScore()),t instanceof o.PipeGarbage&&this.entities.splice(5,2),t instanceof p.ScoreKeeper&&c instanceof e.Pipe&&this.scoreSystem.keepScore()),c.components.collision.onCollision&&(c.components.collision.onCollision(t),c instanceof s.Bird&&(this.entities.splice(5,this.entities.length-5),this.scoreSystem.resetScore())))}}},n.CollisionSystem=r},{"../entities/bird":7,"../entities/pipe":10,"../entities/pipeGarbage":11,"../entities/score":12,"./score":21}],17:[function(i,t,n){var s=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};s.prototype.run=function(){this.loop=window.requestAnimationFrame(this.tick.bind(this))},s.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},n.GraphicsSystem=s},{}],18:[function(i,t,n){var s=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas")};s.prototype.run=function(){this.canvas.addEventListener("click",this.onClick.bind(this)),this.canvas.addEventListener("touchstart",this.onTouch.bind(this))},s.prototype.onClick=function(){var i=this.entities[0];i.components.physics.velocity.y=.8},s.prototype.onTouch=function(i){i.preventDefault();var t=this.entities[0];t.components.physics.velocity.y=.8},n.InputSystem=s},{}],19:[function(i,t,n){var s=i("./collision"),e=function(i){this.entities=i,this.collisionSystem=new s.CollisionSystem(i)};e.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},e.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.physics.update(1/60)}this.collisionSystem.tick()},n.PhysicsSystem=e},{"./collision":16}],20:[function(i,t,n){var s=i("../entities/pipe"),e=i("../settings"),o=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas")};o.prototype.run=function(){window.setInterval(this.tick.bind(this),2e3)},o.prototype.tick=function(){var i=.5*this.canvas.width/this.canvas.height,t=.4+.2*Math.random(),n=t-e.pipeGap/2,o={x:i+e.pipeWidth/2,y:n/2},c={x:e.pipeWidth,y:n};this.entities.push(new s.Pipe(o,c));var n=1-t-e.pipeGap/2,o={x:i+e.pipeWidth/2,y:1-n/2},c={x:e.pipeWidth,y:n};this.entities.push(new s.Pipe(o,c))},n.PipeSystem=o},{"../entities/pipe":10,"../settings":15}],21:[function(i,t,n){var s=function(){this.score=0,this.updateScore=document.getElementById("score")};s.prototype.keepScore=function(){this.score++,this.updateScore.innerHTML=this.score},s.prototype.resetScore=function(){this.score=0,this.updateScore.innerHTML=this.score},n.ScoreSystem=s},{}]},{},[14]);