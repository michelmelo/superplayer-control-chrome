(function (String) {
  String.prototype.format = function () {
    if (arguments.length > 0) {
      var val = this,
        i = 0,
        paramLen = arguments.length;

      for (; i < paramLen; i++) {
        val = val.replace('{' + i + '}', arguments[i]);
      }

      return val;
    }
    else {
      return this;
    }
  };
}(String));
