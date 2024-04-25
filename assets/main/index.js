System.register("chunks:///_virtual/Bullet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Ship.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec3, Component, Ship;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Ship = module.Ship;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e2e57NITQFDMqIiMtVDxL0b", "Bullet", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Bullet = exports('Bullet', (_dec = ccclass('Bullet'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bullet, _Component);

        function Bullet() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.speed = 6; // Kecepatan gerak enemy

          _this.lastUpdateTime = 0; // Waktu terakhir pembaruan

          _this.target = null;
          return _this;
        }

        var _proto = Bullet.prototype; // Simpan posisi target

        _proto.start = function start() {
          // Mendapatkan arah menuju posisi ship dan menggerakkan enemy menuju ship setiap frame
          this.schedule(this.moveTowardsShip, 0);
        };

        _proto.moveTowardsShip = function moveTowardsShip(deltaTime) {
          // Tentukan posisi ship yang tetap di x = 0 dan y = 0
          var shipPosition = new Vec3(0, 0, 0);
          var bulletDirection = Ship.direction; // console.log(bulletDirection.x);
          // Mendapatkan arah menuju ship

          var direction = shipPosition.subtract(this.node.position).normalize();
          var invertedDirection = direction.clone(); // Membuat salinan dari vektor arah
          // Mengalikan setiap komponen koordinat dengan -1

          invertedDirection.x = bulletDirection.x;
          invertedDirection.y = bulletDirection.y; // Mengurangi kecepatan gerakan

          var adjustedSpeed = this.speed * 0.2; // Misalnya, mengurangi kecepatan menjadi setengah
          // Menggerakkan enemy menuju ship dengan kecepatan yang disesuaikan

          var movement = invertedDirection.multiplyScalar(adjustedSpeed * deltaTime);
          this.node.position = this.node.position.add(movement);
          var angle = Math.atan2(direction.y, direction.x);
          angle = angle * (180 / Math.PI);
          angle -= 90;
          this.node.angle = angle;
        };

        _proto.update = function update(deltaTime) {
          // Perbarui waktu terakhir pembaruan
          this.lastUpdateTime = deltaTime;
        };

        return Bullet;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enemy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Collider2D, Contact2DType, Vec3, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "3b9e3XVNKxFVrFFoq9GxBAe", "Enemy", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Enemy = exports('Enemy', (_dec = ccclass('Enemy'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Enemy, _Component);

        function Enemy() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.speed = 100; // Kecepatan gerak enemy

          _this.lastUpdateTime = 0; // Waktu terakhir pembaruan

          _this.score = 0;
          return _this;
        }

        var _proto = Enemy.prototype;

        _proto.start = function start() {
          // Mendapatkan arah menuju posisi ship dan menggerakkan enemy menuju ship setiap frame
          this.schedule(this.moveTowardsShip, 0);
          this.node.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onCollide, this);
        };

        _proto.onCollide = function onCollide(selfCollider, otherCollider) {
          var _this2 = this;

          Enemy.Map = '2';
          setTimeout(function () {
            // Hapus bullet dari scene setelah umur maksimal
            _this2.node.destroy();
          }, 0.01 * 1000); // this.score += 1;
          // console.log(this.score);
          // console.log('hp-1')
          // this.score += 1;
          // console.log(this.score)
        };

        _proto.moveTowardsShip = function moveTowardsShip(deltaTime) {
          // Tentukan posisi ship yang tetap di x = 0 dan y = 0
          var shipPosition = new Vec3(0, 0, 0); // Mendapatkan arah menuju ship

          var direction = shipPosition.subtract(this.node.position).normalize(); // Mengurangi kecepatan gerakan

          var adjustedSpeed = this.speed * 0.2; // Misalnya, mengurangi kecepatan menjadi setengah
          // Menggerakkan enemy menuju ship dengan kecepatan yang disesuaikan

          var movement = direction.multiplyScalar(adjustedSpeed * deltaTime);
          this.node.position = this.node.position.add(movement);
          var angle = Math.atan2(direction.y, direction.x);
          angle = angle * (180 / Math.PI);
          angle -= 90;
          this.node.angle = angle;
        };

        _proto.update = function update(deltaTime) {
          // Perbarui waktu terakhir pembaruan
          this.lastUpdateTime = deltaTime;
        };

        _createClass(Enemy, null, [{
          key: "Map",
          get: // Properti statis
          function get() {
            return this._Map;
          },
          set: function set(value) {
            this._Map = value;
          }
        }]);

        return Enemy;
      }(Component), _class2._Map = '1', _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, _decorator, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;

      cclegacy._RF.push({}, "ba7bfHQBuROkYzdFRNQYe/V", "Home", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Home = exports('Home', (_dec = ccclass('Home'), _dec2 = property({
        type: Button
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Home, _Component);

        function Home() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Home.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on('click', this.onPlayButtonClick, this);
        };

        _proto.onPlayButtonClick = function onPlayButtonClick() {
          director.loadScene('Home');
        };

        return Home;
      }(Component), _applyDecoratedDescriptor(_class2.prototype, "onLoad", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onLoad"), _class2.prototype), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Bullet.ts', './Enemy.ts', './Home.ts', './MainGame.ts', './PlayAgain.ts', './Playbutton.ts', './Ship.ts', './ShipCollide.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enemy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, Label, Vec3, instantiate, Collider2D, Contact2DType, Vec2, Component, Enemy;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      Enemy = module.Enemy;
    }],
    execute: function () {
      exports('getComponent', getComponent);

      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "53614vNATRAuaRhMGnqkaAP", "MainGame", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainGame = exports('MainGame', (_dec = ccclass('MainGame'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainGame, _Component);

        function MainGame() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "enemyPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bulletPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ship", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "scoreLabel", _descriptor4, _assertThisInitialized(_this)); //hp enemy


          _this.score = 0;
          _this["try"] = void 0;
          _this.enemyNode = void 0;

          _initializerDefineProperty(_this, "bulletLifetime", _descriptor5, _assertThisInitialized(_this)); // Umur bullet dalam detik


          _this.bulletInterval = 0.5;
          _this.lastSpawnTime = 0;
          _this.enemies = [];
          return _this;
        }

        var _proto = MainGame.prototype; // Array untuk menyimpan referensi musuh yang telah dibuat
        // Function untuk mengambil musuh dari array berdasarkan indeks

        _proto.getEnemy = function getEnemy(index) {
          return this.enemies[index];
        } // Function untuk menambahkan musuh baru ke dalam array
        ;

        _proto.addEnemy = function addEnemy(enemy) {
          this.enemies.push(enemy);
        } // Function untuk menghapus musuh dari array berdasarkan indeks
        ;

        _proto.removeEnemy = function removeEnemy(index) {
          this.enemies.splice(index, 1);
        } // Function untuk menghapus semua musuh dari array
        ;

        _proto.clearEnemies = function clearEnemies() {
          this.enemies = [];
        };

        _proto.start = function start() {
          this.schedule(this.spawnBullet, this.bulletInterval);
          this.schedule(this.spawnEnemyRandomly, 3);
          this.displayScore();
          console.log(Enemy.Map);
        };

        _proto.displayScore = function displayScore() {
          if (this.scoreLabel) {
            this.scoreLabel.string = "Score: " + this.score;
          }
        };

        _proto.spawnEnemyRandomly = function spawnEnemyRandomly() {
          var randomX = Math.random() * 1500 - 400;
          var randomY = Math.random() * 1300 - 300;
          var spawnPosition = new Vec3(randomX, randomY, 0);
          this.enemyNode = instantiate(this.enemyPrefab);
          this.enemyNode.setPosition(spawnPosition);
          console.log(this.enemyNode);
          this.node.addChild(this.enemyNode);
          this.enemyNode.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onCollide, this);
          this.addEnemy(this.enemyNode);
        };

        _proto.destroyEnemy = function destroyEnemy(index) {
          var enemyNode = this.getEnemy(index);

          if (enemyNode) {
            enemyNode.destroy();
            this.removeEnemy(index); // Menghapus musuh dari array
          }
        };

        _proto.destroyAllEnemies = function destroyAllEnemies() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.enemies), _step; !(_step = _iterator()).done;) {
            var enemyNode = _step.value;
            enemyNode.destroy();
          }

          this.clearEnemies(); // Menghapus semua musuh dari array
        };

        _proto.spawnBullet = function spawnBullet() {
          var bulletNode = instantiate(this.bulletPrefab);
          bulletNode.setPosition(this.ship.position);
          bulletNode.setRotation(this.ship.rotation); // Tambahkan bullet ke scene

          this.node.addChild(bulletNode); // Hitung waktu hidup bullet

          setTimeout(function () {
            // Hapus bullet dari scene setelah umur maksimal
            bulletNode.destroy();
          }, this.bulletLifetime * 1000);
        };

        _proto.onMouseDown = function onMouseDown(event) {
          var target = event.getLocation();
          var currentPosition = this.ship.getPosition();
          var direction = target.subtract(new Vec2(currentPosition.x, currentPosition.y)).normalize();
          var angle = Math.atan2(direction.y, direction.x);
          angle = angle * (180 / Math.PI);
          angle += 90;
          this.ship.angle = angle;
        } // Method yang akan dipanggil saat terjadi collision
        ;

        _proto.onCollide = function onCollide(selfCollider, otherCollider) {
          console.log('masukk');
          this.score += 1;
          this.displayScore();
          console.log(this.score); // Cari indeks musuh yang bertabrakan dalam array

          var index = this.enemies.indexOf(otherCollider.node);

          if (index !== -1) {
            // Hapus musuh yang bertabrakan
            this.destroyEnemy(0);
          }
        };

        return MainGame;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ship", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bulletLifetime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      })), _class2)) || _class));

      function getComponent(Collider2D) {
        throw new Error('Function not implemented.');
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayAgain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, _decorator, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;

      cclegacy._RF.push({}, "e72ecJ1TC9PGLog922QZmlJ", "PlayAgain", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayAgain = exports('PlayAgain', (_dec = ccclass('PlayAgain'), _dec2 = property({
        type: Button
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayAgain, _Component);

        function PlayAgain() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = PlayAgain.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on('click', this.onPlayButtonClick, this);
        };

        _proto.onPlayButtonClick = function onPlayButtonClick() {
          director.loadScene('inGame');
        };

        return PlayAgain;
      }(Component), _applyDecoratedDescriptor(_class2.prototype, "onLoad", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onLoad"), _class2.prototype), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Playbutton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, _decorator, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;

      cclegacy._RF.push({}, "a4580xWvhpM7rOV5oe5QL/B", "Playbutton", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Playbutton = exports('Playbutton', (_dec = ccclass('Playbutton'), _dec2 = property({
        type: Button
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Playbutton, _Component);

        function Playbutton() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Playbutton.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on('click', this.onPlayButtonClick, this);
        };

        _proto.onPlayButtonClick = function onPlayButtonClick() {
          director.loadScene('inGame');
        };

        return Playbutton;
      }(Component), _applyDecoratedDescriptor(_class2.prototype, "onLoad", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onLoad"), _class2.prototype), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Ship.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec2, Collider2D, Contact2DType, ParticleSystem2D, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec2 = module.Vec2;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      ParticleSystem2D = module.ParticleSystem2D;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;

      cclegacy._RF.push({}, "7f7c5CKngdH3rHKWjLLWiJj", "Ship", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Ship = exports('Ship', (_dec = ccclass('Ship'), _dec2 = property({
        type: Node
      }), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ship, _Component);

        function Ship() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "fighterPlane", _descriptor, _assertThisInitialized(_this)); // Assign node pesawat tempur di editor


          _initializerDefineProperty(_this, "particle", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Ship.prototype;

        _proto.start = function start() {
          // Tambahkan event listener klik mouse
          this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
          var collider = this.fighterPlane.getComponent(Collider2D);
          collider.on(Contact2DType.BEGIN_CONTACT, this.onCollide, this);
        };

        _proto.onMouseDown = function onMouseDown(event) {
          var target = event.getLocation(); // Dapatkan posisi pesawat tempur dalam koordinat dunia

          var playerPos = this.fighterPlane.getWorldPosition(); // Hitung vektor arah

          Ship.direction = new Vec2(target.x - playerPos.x, target.y - playerPos.y);
          var direct = Ship.direction; // Hitung sudut dalam radian

          var angle = Math.atan2(direct.y, direct.x); // Konversi radian ke derajat

          angle = angle * (180 / Math.PI); // Penyesuaian sudut jika diperlukan

          angle += 90; // Menambahkan offset sudut jika diperlukan
          // Rotasi pesawat tempur

          this.fighterPlane.angle = angle;
        };

        _proto.onCollide = function onCollide(selfCollider, otherCollider) {
          var _this2 = this;

          this.scheduleOnce(function () {
            _this2.particle.getComponent(ParticleSystem2D).resetSystem();
          });
          this.scheduleOnce(function () {
            _this2.particle.getComponent(ParticleSystem2D).stopSystem();
          }, 0.5); // Tunggu 3 detik sebelum memuat scene lain

          setTimeout(function () {
            // Memuat scene lain setelah 3 detik
            director.loadScene("GameOver");
          }, 500); // 3000 milidetik sama dengan 3 detik
        };

        return Ship;
      }(Component), _class3.direction = new Vec2(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fighterPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShipCollide.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b727b/DPJRNQ42TXIWWSRsU", "ShipCollide", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ShipCollide = exports('ShipCollide', (_dec = ccclass('ShipCollide'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShipCollide, _Component);

        function ShipCollide() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this["try"] = false;
          return _this;
        }

        var _proto = ShipCollide.prototype;

        _proto.start = function start() {
          this.node.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onCollide, this);
        };

        _proto.onCollide = function onCollide(selfCollider, otherCollider) {};

        _proto.update = function update(deltaTime) {};

        return ShipCollide;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});