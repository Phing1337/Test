require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BodymovinLayer":[function(require,module,exports){

/*
BodymovinLayer
-
Implementation of Hernan Torrisi's "Bodymovin" plugin, for Framer.
by @72mena
 */
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.BodymovinLayer = (function(superClass) {
  extend(BodymovinLayer, superClass);

  BodymovinLayer.define("speed", {
    get: function() {
      return this._properties["speed"];
    },
    set: function(value) {
      this._properties["speed"] = value;
      if (this.built) {
        this.setSpeed(value);
      }
      return this.emit("change:speed");
    }
  });

  BodymovinLayer.define("direction", {
    get: function() {
      return this._properties["direction"];
    },
    set: function(value) {
      this._properties["direction"] = value;
      if (this.built) {
        this.setDirection(value);
      }
      return this.emit("change:direction");
    }
  });

  BodymovinLayer.define("path", {
    get: function() {
      return this._properties["path"];
    },
    set: function(value) {
      this._properties["path"] = value;
      if (this.built) {
        this.setSettings();
      }
      return this.emit("change:path");
    }
  });

  function BodymovinLayer(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    if ((base = this.options).backgroundColor == null) {
      base.backgroundColor = null;
    }
    if ((base1 = this.options).path == null) {
      base1.path = null;
    }
    if ((base2 = this.options).autoplay == null) {
      base2.autoplay = true;
    }
    if ((base3 = this.options).loop == null) {
      base3.loop = true;
    }
    if ((base4 = this.options).speed == null) {
      base4.speed = 1;
    }
    if ((base5 = this.options).direction == null) {
      base5.direction = 1;
    }
    if ((base6 = this.options).renderer == null) {
      base6.renderer = "svg";
    }
    BodymovinLayer.__super__.constructor.call(this, this.options);
    if (this.options.path === null) {
      print("From BodymovinLayer: Setting a path to your json file is required.");
    }
    if (this.name === "") {
      print("From BodymovinLayer: The 'name' attribute is required.");
    }
    this.autoplay = this.options.autoplay;
    this.loop = this.options.loop;
    this.renderer = this.options.renderer;
    this.built = false;
    this._animationLayer = null;
    this.build();
  }

  BodymovinLayer.prototype.build = function() {
    this.html = '<div id=' + ("" + this.name) + '></div>';
    this.setSettings();
    return this.built = true;
  };

  BodymovinLayer.prototype.setSettings = function() {
    var _container, bodymovinSettings;
    _container = document.getElementById(this.name);
    _container.innerHTML = "";
    bodymovinSettings = {
      container: _container,
      path: this.path,
      renderer: this.renderer,
      autoplay: this.autoplay,
      loop: this.loop
    };
    this._animationLayer = bodymovin.loadAnimation(bodymovinSettings);
    this.setSpeed();
    return this.setDirection();
  };

  BodymovinLayer.prototype.play = function() {
    return this._animationLayer.play();
  };

  BodymovinLayer.prototype.stop = function() {
    return this._animationLayer.stop();
  };

  BodymovinLayer.prototype.pause = function() {
    return this._animationLayer.pause();
  };

  BodymovinLayer.prototype.setSpeed = function(speed) {
    if (speed == null) {
      speed = this.speed;
    }
    return this._animationLayer.setSpeed(speed);
  };

  BodymovinLayer.prototype.setDirection = function(direction) {
    if (direction == null) {
      direction = this.direction;
    }
    return this._animationLayer.setDirection(direction);
  };

  return BodymovinLayer;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvanNvbiBhbmltYXRpb24vQm9keW1vdmluIGZvciBGcmFtZXIuZnJhbWVyL21vZHVsZXMvQm9keW1vdmluTGF5ZXIuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcbkJvZHltb3ZpbkxheWVyXG4tXG5JbXBsZW1lbnRhdGlvbiBvZiBIZXJuYW4gVG9ycmlzaSdzIFwiQm9keW1vdmluXCIgcGx1Z2luLCBmb3IgRnJhbWVyLlxuYnkgQDcybWVuYVxuIyMjXG5cbmNsYXNzIGV4cG9ydHMuQm9keW1vdmluTGF5ZXIgZXh0ZW5kcyBMYXllclxuXG5cdEBkZWZpbmUgXCJzcGVlZFwiLFxuXHRcdGdldDogLT4gQF9wcm9wZXJ0aWVzW1wic3BlZWRcIl1cblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBfcHJvcGVydGllc1tcInNwZWVkXCJdID0gdmFsdWVcblx0XHRcdEBzZXRTcGVlZCh2YWx1ZSkgaWYgQGJ1aWx0XG5cdFx0XHRAZW1pdCBcImNoYW5nZTpzcGVlZFwiXG5cblx0QGRlZmluZSBcImRpcmVjdGlvblwiLFxuXHRcdGdldDogLT4gQF9wcm9wZXJ0aWVzW1wiZGlyZWN0aW9uXCJdXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX3Byb3BlcnRpZXNbXCJkaXJlY3Rpb25cIl0gPSB2YWx1ZVxuXHRcdFx0QHNldERpcmVjdGlvbih2YWx1ZSkgaWYgQGJ1aWx0XG5cdFx0XHRAZW1pdCBcImNoYW5nZTpkaXJlY3Rpb25cIlxuXG5cdEBkZWZpbmUgXCJwYXRoXCIsXG5cdFx0Z2V0OiAtPiBAX3Byb3BlcnRpZXNbXCJwYXRoXCJdXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX3Byb3BlcnRpZXNbXCJwYXRoXCJdID0gdmFsdWVcblx0XHRcdEBzZXRTZXR0aW5ncygpIGlmIEBidWlsdFxuXHRcdFx0QGVtaXQgXCJjaGFuZ2U6cGF0aFwiXG5cblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdCMgRGVmYXVsdHNcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gbnVsbFxuXHRcdEBvcHRpb25zLnBhdGggPz0gbnVsbFxuXHRcdEBvcHRpb25zLmF1dG9wbGF5ID89IHRydWVcblx0XHRAb3B0aW9ucy5sb29wID89IHRydWVcblx0XHRAb3B0aW9ucy5zcGVlZCA/PSAxXG5cdFx0QG9wdGlvbnMuZGlyZWN0aW9uID89IDFcblx0XHRAb3B0aW9ucy5yZW5kZXJlciA/PSBcInN2Z1wiXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0aWYgQG9wdGlvbnMucGF0aCBpcyBudWxsXG5cdFx0XHRwcmludCBcIkZyb20gQm9keW1vdmluTGF5ZXI6IFNldHRpbmcgYSBwYXRoIHRvIHlvdXIganNvbiBmaWxlIGlzIHJlcXVpcmVkLlwiXG5cdFx0aWYgQG5hbWUgaXMgXCJcIlxuXHRcdFx0cHJpbnQgXCJGcm9tIEJvZHltb3ZpbkxheWVyOiBUaGUgJ25hbWUnIGF0dHJpYnV0ZSBpcyByZXF1aXJlZC5cIlxuXG5cdFx0I1Nob3J0Y3V0c1xuXHRcdEBhdXRvcGxheSA9IEBvcHRpb25zLmF1dG9wbGF5XG5cdFx0QGxvb3AgPSBAb3B0aW9ucy5sb29wXG5cdFx0QHJlbmRlcmVyID0gQG9wdGlvbnMucmVuZGVyZXJcblxuXHRcdCNWYXJzXG5cdFx0QGJ1aWx0ID0gZmFsc2Vcblx0XHRAX2FuaW1hdGlvbkxheWVyID0gbnVsbFxuXG5cdFx0I1J1blxuXHRcdEBidWlsZCgpXG5cblx0YnVpbGQ6ICgpIC0+XG5cdFx0QGh0bWwgPSAnPGRpdiBpZD0nK1wiI3tAbmFtZX1cIisnPjwvZGl2Pidcblx0XHRAc2V0U2V0dGluZ3MoKVxuXHRcdEBidWlsdCA9IHRydWVcblxuXHRzZXRTZXR0aW5nczogKCkgLT5cblx0XHRfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQG5hbWUpXG5cdFx0X2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG5cblx0XHRib2R5bW92aW5TZXR0aW5ncyA9XG5cdFx0XHRjb250YWluZXI6IF9jb250YWluZXIsXG5cdFx0XHRwYXRoOiBAcGF0aCxcblx0XHRcdHJlbmRlcmVyOiBAcmVuZGVyZXIsXG5cdFx0XHRhdXRvcGxheTogQGF1dG9wbGF5LFxuXHRcdFx0bG9vcDogQGxvb3BcblxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIgPSBib2R5bW92aW4ubG9hZEFuaW1hdGlvbihib2R5bW92aW5TZXR0aW5ncyk7XG5cdFx0QHNldFNwZWVkKClcblx0XHRAc2V0RGlyZWN0aW9uKClcblxuXHRwbGF5OiAoKSAtPlxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIucGxheSgpXG5cdHN0b3A6ICgpIC0+XG5cdFx0QF9hbmltYXRpb25MYXllci5zdG9wKClcblx0cGF1c2U6ICgpIC0+XG5cdFx0QF9hbmltYXRpb25MYXllci5wYXVzZSgpXG5cdHNldFNwZWVkOiAoc3BlZWQpIC0+XG5cdFx0c3BlZWQgPz0gQHNwZWVkXG5cdFx0QF9hbmltYXRpb25MYXllci5zZXRTcGVlZChzcGVlZClcblx0c2V0RGlyZWN0aW9uOiAoZGlyZWN0aW9uKSAtPlxuXHRcdGRpcmVjdGlvbiA/PSBAZGlyZWN0aW9uXG5cdFx0QF9hbmltYXRpb25MYXllci5zZXREaXJlY3Rpb24oZGlyZWN0aW9uKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7O0FEQUE7Ozs7OztBQUFBLElBQUE7OztBQU9NLE9BQU8sQ0FBQzs7O0VBRWIsY0FBQyxDQUFBLE1BQUQsQ0FBUSxPQUFSLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFHLElBQUMsQ0FBQSxXQUFZLENBQUEsT0FBQTtJQUFoQixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDtNQUNKLElBQUMsQ0FBQSxXQUFZLENBQUEsT0FBQSxDQUFiLEdBQXdCO01BQ3hCLElBQW9CLElBQUMsQ0FBQSxLQUFyQjtRQUFBLElBQUMsQ0FBQSxRQUFELENBQVUsS0FBVixFQUFBOzthQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sY0FBTjtJQUhJLENBREw7R0FERDs7RUFPQSxjQUFDLENBQUEsTUFBRCxDQUFRLFdBQVIsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLFdBQVksQ0FBQSxXQUFBO0lBQWhCLENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxLQUFEO01BQ0osSUFBQyxDQUFBLFdBQVksQ0FBQSxXQUFBLENBQWIsR0FBNEI7TUFDNUIsSUFBd0IsSUFBQyxDQUFBLEtBQXpCO1FBQUEsSUFBQyxDQUFBLFlBQUQsQ0FBYyxLQUFkLEVBQUE7O2FBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxrQkFBTjtJQUhJLENBREw7R0FERDs7RUFPQSxjQUFDLENBQUEsTUFBRCxDQUFRLE1BQVIsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLFdBQVksQ0FBQSxNQUFBO0lBQWhCLENBQUw7SUFD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
