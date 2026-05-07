(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.a1;
  var objectMeta = kotlin_kotlin.$_$.z;
  var VOID = kotlin_kotlin.$_$.i1;
  var setMetadataFor = kotlin_kotlin.$_$.b1;
  var defineProp = kotlin_kotlin.$_$.q;
  var objectCreate = kotlin_kotlin.$_$.y;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var getStringHashCode = kotlin_kotlin.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.f1;
  var classMeta = kotlin_kotlin.$_$.p;
  var toIntOrNull = kotlin_kotlin.$_$.e1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AppConfig, 'AppConfig', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Channel, 'Channel', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(ChannelController, 'ChannelController', classMeta);
  //endregion
  function AppConfig() {
    AppConfig_instance = this;
    this.FIREBASE_BASE_URL = 'https://firebaseio.com';
  }
  protoOf(AppConfig).y7 = function () {
    return this.FIREBASE_BASE_URL;
  };
  var AppConfig_instance;
  function AppConfig_getInstance() {
    if (AppConfig_instance == null)
      new AppConfig();
    return AppConfig_instance;
  }
  function Channel_init_$Init$(name, url, $this) {
    Channel.call($this, name, url, null, false, null, null);
    return $this;
  }
  function create(name, url) {
    return Channel_init_$Init$(name, url, objectCreate(protoOf(Channel)));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).z7 = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.kur_iptv.shared.Channel', this, 6);
    tmp0_serialDesc.t7('name', false);
    tmp0_serialDesc.t7('url', false);
    tmp0_serialDesc.t7('logo', true);
    tmp0_serialDesc.t7('isFavorite', true);
    tmp0_serialDesc.t7('category', true);
    tmp0_serialDesc.t7('pin', true);
    this.a8_1 = tmp0_serialDesc;
  }
  protoOf($serializer).o6 = function () {
    return this.a8_1;
  };
  protoOf($serializer).q7 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Channel(name, url, logo, isFavorite, category, pin) {
    Companion_getInstance();
    logo = logo === VOID ? null : logo;
    isFavorite = isFavorite === VOID ? false : isFavorite;
    category = category === VOID ? null : category;
    pin = pin === VOID ? null : pin;
    this.name = name;
    this.url = url;
    this.logo = logo;
    this.isFavorite = isFavorite;
    this.category = category;
    this.pin = pin;
  }
  protoOf(Channel).b8 = function () {
    return this.name;
  };
  protoOf(Channel).c8 = function () {
    return this.url;
  };
  protoOf(Channel).d8 = function () {
    return this.logo;
  };
  protoOf(Channel).e8 = function (_set____db54di) {
    this.isFavorite = _set____db54di;
  };
  protoOf(Channel).f8 = function () {
    return this.isFavorite;
  };
  protoOf(Channel).g8 = function () {
    return this.category;
  };
  protoOf(Channel).h8 = function (_set____db54di) {
    this.pin = _set____db54di;
  };
  protoOf(Channel).i8 = function () {
    return this.pin;
  };
  protoOf(Channel).j8 = function () {
    return this.name;
  };
  protoOf(Channel).k8 = function () {
    return this.url;
  };
  protoOf(Channel).l8 = function () {
    return this.logo;
  };
  protoOf(Channel).m8 = function () {
    return this.isFavorite;
  };
  protoOf(Channel).n8 = function () {
    return this.category;
  };
  protoOf(Channel).o8 = function () {
    return this.pin;
  };
  protoOf(Channel).p8 = function (name, url, logo, isFavorite, category, pin) {
    return new Channel(name, url, logo, isFavorite, category, pin);
  };
  protoOf(Channel).copy = function (name, url, logo, isFavorite, category, pin, $super) {
    name = name === VOID ? this.name : name;
    url = url === VOID ? this.url : url;
    logo = logo === VOID ? this.logo : logo;
    isFavorite = isFavorite === VOID ? this.isFavorite : isFavorite;
    category = category === VOID ? this.category : category;
    pin = pin === VOID ? this.pin : pin;
    return this.p8(name, url, logo, isFavorite, category, pin);
  };
  protoOf(Channel).toString = function () {
    return 'Channel(name=' + this.name + ', url=' + this.url + ', logo=' + this.logo + ', isFavorite=' + this.isFavorite + ', category=' + this.category + ', pin=' + this.pin + ')';
  };
  protoOf(Channel).hashCode = function () {
    var result = getStringHashCode(this.name);
    result = imul(result, 31) + getStringHashCode(this.url) | 0;
    result = imul(result, 31) + (this.logo == null ? 0 : getStringHashCode(this.logo)) | 0;
    result = imul(result, 31) + (this.isFavorite | 0) | 0;
    result = imul(result, 31) + (this.category == null ? 0 : getStringHashCode(this.category)) | 0;
    result = imul(result, 31) + (this.pin == null ? 0 : getStringHashCode(this.pin)) | 0;
    return result;
  };
  protoOf(Channel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Channel))
      return false;
    var tmp0_other_with_cast = other instanceof Channel ? other : THROW_CCE();
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.url === tmp0_other_with_cast.url))
      return false;
    if (!(this.logo == tmp0_other_with_cast.logo))
      return false;
    if (!(this.isFavorite === tmp0_other_with_cast.isFavorite))
      return false;
    if (!(this.category == tmp0_other_with_cast.category))
      return false;
    if (!(this.pin == tmp0_other_with_cast.pin))
      return false;
    return true;
  };
  function ChannelController(channels) {
    this.channels = channels;
    this.q8_1 = '';
  }
  protoOf(ChannelController).r8 = function () {
    return this.channels;
  };
  protoOf(ChannelController).handleKeyPress = function (digit) {
    this.q8_1 = this.q8_1 + digit.toString();
    return this.q8_1;
  };
  protoOf(ChannelController).getChannelFromBuffer = function () {
    var tmp0_safe_receiver = toIntOrNull(this.q8_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver - 1 | 0;
    var index = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    var tmp;
    if (index >= 0 ? index < this.channels.length : false) {
      tmp = this.channels[index];
    } else {
      tmp = null;
    }
    var foundChannel = tmp;
    this.q8_1 = '';
    return foundChannel;
  };
  //region block: post-declaration
  protoOf($serializer).r7 = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$kur_iptv = $com.kur_iptv || ($com.kur_iptv = {});
    var $com$kur_iptv$shared = $com$kur_iptv.shared || ($com$kur_iptv.shared = {});
    defineProp($com$kur_iptv$shared, 'AppConfig', AppConfig_getInstance, VOID);
    var $com = _.com || (_.com = {});
    var $com$kur_iptv = $com.kur_iptv || ($com.kur_iptv = {});
    var $com$kur_iptv$shared = $com$kur_iptv.shared || ($com$kur_iptv.shared = {});
    $com$kur_iptv$shared.Channel = Channel;
    $com$kur_iptv$shared.Channel.create = create;
    defineProp($com$kur_iptv$shared.Channel, 'Companion', Companion_getInstance, VOID);
    var $com = _.com || (_.com = {});
    var $com$kur_iptv = $com.kur_iptv || ($com.kur_iptv = {});
    var $com$kur_iptv$shared = $com$kur_iptv.shared || ($com$kur_iptv.shared = {});
    $com$kur_iptv$shared.ChannelController = ChannelController;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js')));

//# sourceMappingURL=KUR_IPTV-shared.js.map
