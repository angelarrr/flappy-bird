!function i(t,n,s){function o(c,p){if(!n[c]){if(!t[c]){var h="function"==typeof require&&require;if(!p&&h)return h(c,!0);if(e)return e(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var l=n[c]={exports:{}};t[c][0].call(l.exports,function(i){var n=t[c][1][i];return o(n?n:i)},l,l.exports,i,t,n,s)}return n[c].exports}for(var e="function"==typeof require&&require,c=0;c<s.length;c++)o(s[c]);return o}({1:[function(i,t,n){var s=function(i,t){this.entity=i,this.radius=t,this.type="circle"};s.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},s.prototype.collideCircle=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,s=this.radius,o=i.components.collision.radius,e={x:t.x-n.x,y:t.y-n.y},c=e.x*e.x+e.y*e.y,p=s+o;return p*p>c},s.prototype.collideRect=function(i){var t=function(i,t,n){return t>i?t:i>n?n:i},n=this.entity.components.physics.position,s=i.components.physics.position,o=i.components.collision.size,e={x:t(n.x,s.x-o.x/2,s.x+o.x/2),y:t(n.y,s.y-o.y/2,s.y+o.y/2)},c=this.radius,p={x:n.x-e.x,y:n.y-e.y},h=p.x*p.x+p.y*p.y;return c*c>h},n.CircleCollisionComponent=s},{}],2:[function(i,t,n){var s=function(i,t){this.entity=i,this.size=t,this.type="rect"};s.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},s.prototype.collideCircle=function(i){return i.components.collision.collideRect(this.entity)},s.prototype.collideRect=function(i){var t=this.entity.components.physics.position,n=i.components.physics.position,s=this.size,o=i.components.collision.size,e=t.x-s.x/2,c=t.x+s.x/2,p=t.y-s.y/2,h=t.y+s.y/2,r=n.x-o.x/2,l=n.x+o.x/2,a=n.y-o.y/2,y=n.y+o.y/2;return!(e>l||r>c||p>y||a>h)},n.RectCollisionComponent=s},{}],3:[function(i,t,n){var s=function(i){this.entity=i};s.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.arc(0,0,.02,0,2*Math.PI),i.fillStyle="yellow",i.fill(),i.closePath(),i.restore()},n.BirdGraphicsComponent=s},{}],4:[function(i,t,n){var s=function(i,t){this.entity=i,this.size=t};s.prototype.draw=function(i){var t=this.entity.components.physics.position,n=this.entity.color;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle=n,i.fillRect(-this.size.x/2,-this.size.y/2,this.size.x,this.size.y),i.closePath(),i.restore()},n.PipeGraphicsComponent=s},{}],5:[function(i,t,n){var s=function(i){this.entity=i,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};s.prototype.update=function(i){this.velocity.x+=this.acceleration.x*i,this.velocity.y+=this.acceleration.y*i,this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i},n.PhysicsComponent=s},{}],6:[function(i,t,n){var s=i("../components/physics/physics"),o=i("../components/graphics/bird"),e=i("../components/collision/circle"),c=function(){var i=new s.PhysicsComponent(this);i.position.y=.5,i.acceleration.y=-1.5;var t=new o.BirdGraphicsComponent(this),n=new e.CircleCollisionComponent(this,.02);n.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:n}};c.prototype.onCollision=function(i){this.components.physics.position.y=.5,this.components.physics.position.x=0,this.components.physics.velocity.y=0},n.Bird=c},{"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":5}],7:[function(i,t,n){var s=i("../components/graphics/pipe"),o=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.color="white";var i={x:document.getElementById("main-canvas").width,y:.01},t=new o.PhysicsComponent(this);t.position.x=0,t.position.y=1;var n=new s.PipeGraphicsComponent(this,i),c=new e.RectCollisionComponent(this,i);this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.Ceiling=c},{"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],8:[function(i,t,n){var s=i("../components/graphics/pipe"),o=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.color="brown";var i={x:document.getElementById("main-canvas").width,y:.01},t=new o.PhysicsComponent(this);t.position.x=0,t.position.y=0;var n=new s.PipeGraphicsComponent(this,i),c=new e.RectCollisionComponent(this,i);this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.Floor=c},{"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],9:[function(i,t,n){var s=i("../components/graphics/pipe"),o=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(i,t){this.color="green";var n=new o.PhysicsComponent(this);n.position=i,n.velocity.x=-.4;var c=new s.PipeGraphicsComponent(this,t),p=new e.RectCollisionComponent(this,t);p.onCollision=this.onCollision.bind(this),this.components={physics:n,graphics:c,collision:p}};c.prototype.onCollision=function(i){},n.Pipe=c},{"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],10:[function(i,t,n){var s=i("../components/graphics/pipe"),o=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.color="white";var i={x:.01,y:document.getElementById("main-canvas").height},t=new o.PhysicsComponent(this);t.position.x=-(document.getElementById("main-canvas").width/200),t.position.y=0;var n=new s.PipeGraphicsComponent(this,i),c=new e.RectCollisionComponent(this,i);c.onCollision=this.onCollision.bind(this),this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.PipeGarbage=c},{"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],11:[function(i,t,n){var s=i("../components/graphics/pipe"),o=i("../components/physics/physics"),e=i("../components/collision/rect"),c=function(){this.color="white";var i={x:1e-4,y:1},t=new o.PhysicsComponent(this);t.position.x=-.25,t.position.y=0;var n=new s.PipeGraphicsComponent(this,i),c=new e.RectCollisionComponent(this,i);c.onCollision=this.onCollision.bind(this),this.components={physics:t,graphics:n,collision:c}};c.prototype.onCollision=function(i){},n.ScoreKeeper=c},{"../components/collision/rect":2,"../components/graphics/pipe":4,"../components/physics/physics":5}],12:[function(i,t,n){var s=i("./systems/graphics"),o=i("./systems/physics"),e=i("./systems/input"),c=i("./systems/pipe"),p=(i("./systems/score"),i("./entities/bird")),h=i("./entities/floor"),r=i("./entities/ceiling"),l=i("./entities/pipeGarbage"),a=i("./entities/score"),y=function(){this.entities=[new p.Bird,new h.Floor,new r.Ceiling,new l.PipeGarbage,new a.ScoreKeeper],this.graphics=new s.GraphicsSystem(this.entities),this.physics=new o.PhysicsSystem(this.entities),this.inputs=new e.InputSystem(this.entities),this.pipes=new c.PipeSystem(this.entities)};y.prototype.run=function(){this.graphics.run(),this.physics.run(),this.inputs.run(),this.pipes.run()},n.FlappyBird=y},{"./entities/bird":6,"./entities/ceiling":7,"./entities/floor":8,"./entities/pipeGarbage":10,"./entities/score":11,"./systems/graphics":16,"./systems/input":17,"./systems/physics":18,"./systems/pipe":19,"./systems/score":20}],13:[function(i,t,n){var s=i("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var i=document.getElementById("start"),t=document.getElementById("game-start"),n=new s.FlappyBird;i.addEventListener("click",function(){n.run(),t.style.visibility="hidden"})})},{"./flappy_bird":12}],14:[function(i,t,n){n.pipeWidth=.2,n.pipeGap=.25},{}],15:[function(i,t,n){var s=i("../entities/bird"),o=i("../entities/pipe"),e=i("../entities/pipeGarbage"),c=i("./score"),p=i("../entities/score"),h=function(i){this.entities=i,this.scoreSystem=new c.ScoreSystem};h.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},h.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];if(!(!1 in t.components))for(var n=i+1;n<this.entities.length;n++){var c=this.entities[n];!1 in c.components||t.components.collision.collidesWith(c)&&(t.components.collision.onCollision&&(t.components.collision.onCollision(c),t instanceof s.Bird&&(this.entities.splice(5,this.entities.length-5),this.scoreSystem.resetScore()),t instanceof e.PipeGarbage&&this.entities.splice(5,2),t instanceof p.ScoreKeeper&&c instanceof o.Pipe&&this.scoreSystem.keepScore()),c.components.collision.onCollision&&(c.components.collision.onCollision(t),c instanceof s.Bird&&(this.entities.splice(5,this.entities.length-5),this.scoreSystem.resetScore())))}}},n.CollisionSystem=h},{"../entities/bird":6,"../entities/pipe":9,"../entities/pipeGarbage":10,"../entities/score":11,"./score":20}],16:[function(i,t,n){var s=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};s.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},s.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},n.GraphicsSystem=s},{}],17:[function(i,t,n){var s=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas")};s.prototype.run=function(){this.canvas.addEventListener("click",this.onClick.bind(this))},s.prototype.onClick=function(){var i=this.entities[0];i.components.physics.velocity.y=.8},n.InputSystem=s},{}],18:[function(i,t,n){var s=i("./collision"),o=function(i){this.entities=i,this.collisionSystem=new s.CollisionSystem(i)};o.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},o.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.physics.update(1/60)}this.collisionSystem.tick()},n.PhysicsSystem=o},{"./collision":15}],19:[function(i,t,n){var s=i("../entities/pipe"),o=i("../settings"),e=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.interval=0};e.prototype.run=function(){window.setInterval(this.tick.bind(this),2e3)},e.prototype.tick=function(){var i=.5*this.canvas.width/this.canvas.height,t=.4+.2*Math.random(),n=t-o.pipeGap/2,e={x:i+o.pipeWidth/2,y:n/2},c={x:o.pipeWidth,y:n};this.entities.push(new s.Pipe(e,c));var n=1-t-o.pipeGap/2,e={x:i+o.pipeWidth/2,y:1-n/2},c={x:o.pipeWidth,y:n};this.entities.push(new s.Pipe(e,c))},n.PipeSystem=e},{"../entities/pipe":9,"../settings":14}],20:[function(i,t,n){var s=function(){this.score=0,this.updateScore=document.getElementById("score")};s.prototype.keepScore=function(){this.score++,this.updateScore.innerHTML=this.score},s.prototype.resetScore=function(){this.score=0,this.updateScore.innerHTML=this.score},n.ScoreSystem=s},{}]},{},[13]);