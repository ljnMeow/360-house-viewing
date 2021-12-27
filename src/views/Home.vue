<template>
  <div class="home">
    <div class="view-container" ref="threeDBox"></div>
    <div class="tooltip-box" :style="tooltipPosition" ref="tooltipBox">
      <div class="container">
        <div class="title">标题：{{ tooltopContent.title }}</div>
        <div class="explain">说明：{{ tooltopContent.text }}</div>
      </div>
    </div>
    <p class="title-text" ref="titleBox" :style="titlePosition">
      {{ tooltopContent.title }}
    </p>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
export default {
  name: "Home",
  data() {
    return {
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      axisHelper: null,
      sphere: null,
      time: {
        value: 0,
      },
      dataList: [
        {
          image: require("@/assets/image/livingRoom.jpg"),
          tipsList: [
            {
              position: { x: -200, y: -4, z: -147 },
              content: {
                title: "进入厨房",
                text: "",
                image: 1,
                showTip: false,
                showTitle: true,
              },
            },
            {
              position: { x: -100, y: 0, z: -231 },
              content: {
                title: "信息点2",
                text: "77989",
                showTip: true,
                showTitle: false,
              },
            },
            {
              position: { x: 150, y: -50, z: -198 },
              content: {
                title: "信息点3",
                text: "qwdcz",
                showTip: true,
                showTitle: false,
              },
            },
            {
              position: { x: 210, y: 11, z: -140 },
              content: {
                title: "信息点4",
                text: "大豆食心虫侦察十大大苏打大大大大大大大",
                showTip: true,
                showTitle: false,
              },
            },
            {
              position: { x: 208, y: -12, z: 140 },
              content: {
                title: "信息点5",
                text: "eq",
                showTip: true,
                showTitle: false,
              },
            },
            {
              position: { x: 86, y: -9, z: 236 },
              content: {
                title: "进入房间",
                text: "",
                showTip: false,
                showTitle: true,
              },
            },
          ],
        },
        {
          image: require("@/assets/image/kitchen.jpg"),
          tipsList: [
            {
              position: { x: -199, y: -24, z: 145 },
              content: {
                title: "进入大厅",
                text: "",
                image: 0,
                showTip: false,
                showTitle: true,
              },
            },
          ],
        },
      ],
      tipsSpriteList: [],
      tooltipPosition: {
        top: "-100%",
        left: "-100%",
      },
      titlePosition: {
        top: "-100%",
        left: "-100%",
      },
      tooltopContent: {},
    };
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x101010);
    },
    initCamera(element) {
      this.camera = new THREE.PerspectiveCamera(
        45,
        element.clientWidth / element.clientHeight,
        0.1,
        1000
      );
      this.camera.position.set(50, 0, 40);
    },
    initControls(element) {
      this.controls = new OrbitControls(this.camera, element);
      this.controls.minDistance = 1;
      this.controls.maxDistance = 100;
      this.controls.enablePan = false;
    },
    initRenderer(element) {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(element.offsetWidth, element.offsetHeight);
      element.appendChild(this.renderer.domElement);
    },
    initContent(index = 0) {
      let sphereGeometry = new THREE.SphereGeometry(16, 50, 50);
      sphereGeometry.scale(16, 16, -16);
      let texture = new THREE.TextureLoader().load(this.dataList[index].image);
      let sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      this.scene.add(this.sphere);
    },
    addTipsSprite(index = 0) {
      let tipTexture = new THREE.TextureLoader().load(
        require("@/assets/image/tip.png")
      );
      let material = new THREE.SpriteMaterial({ map: tipTexture });
      this.tipsSpriteList = [];
      this.dataList[index].tipsList.forEach((item) => {
        let sprite = new THREE.Sprite(material);
        sprite.scale.set(10, 10, 10);
        sprite.position.set(item.position.x, item.position.y, item.position.z);
        sprite.content = item.content;
        this.tipsSpriteList.push(sprite);
        this.scene.add(sprite);
      });
    },
    changeContentAndtips(index) {
      this.scene.children = this.scene.children.filter(
        (item) => String(item.type) !== "Sprite"
      );
      this.tipsSpriteList = [];
      let texture = new THREE.TextureLoader().load(this.dataList[index].image);
      let sphereMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0,
      });
      this.sphere.material = sphereMaterial;
      this.camera.updateProjectionMatrix();
      gsap.to(sphereMaterial, { transparent: true, opacity: 1, duration: 2 });
      this.addTipsSprite(index);
    },
    render() {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.renderer.sortObjects = false;
      this.timer = requestAnimationFrame(this.render);
      this.time.value += 0.015;
    },
    onResize() {
      let element = this.$refs.threeDBox;
      this.camera.aspect = element.clientWidth / element.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(element.clientWidth, element.clientHeight);
    },
    onMouseClick(e) {
      e.preventDefault();
      let element = this.$refs.threeDBox;
      let raycaster = new THREE.Raycaster();
      let mouse = new THREE.Vector2();
      mouse.x = (e.clientX / element.clientWidth) * 2 - 1;
      mouse.y = -(e.clientY / element.clientHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, this.camera);
      let intersects = raycaster.intersectObjects(this.tipsSpriteList, true);
      if (intersects.length > 0 && intersects[0].object.content.showTitle) {
        this.changeContentAndtips(intersects[0].object.content.image);
        this.handleTooltipHide(e);
      }
    },
    onMousemove(e) {
      e.preventDefault();
      let element = this.$refs.threeDBox;
      let raycaster = new THREE.Raycaster();
      let mouse = new THREE.Vector2();
      mouse.x = (e.clientX / element.clientWidth) * 2 - 1;
      mouse.y = -(e.clientY / element.clientHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, this.camera);
      let intersects = raycaster.intersectObjects(this.tipsSpriteList, true);
      if (intersects.length > 0) {
        let elementWidth = element.clientWidth / 2;
        let elementHeight = element.clientHeight / 2;
        let worldVector = new THREE.Vector3(
          intersects[0].object.position.x,
          intersects[0].object.position.y,
          intersects[0].object.position.z
        );
        let position = worldVector.project(this.camera);
        this.tooltopContent = intersects[0].object.content;
        if (intersects[0].object.content.showTip) {
          let left = Math.round(
            elementWidth * position.x +
              elementWidth -
              this.$refs.tooltipBox.clientWidth / 2
          );
          let top = Math.round(
            -elementHeight * position.y +
              elementHeight -
              this.$refs.tooltipBox.clientHeight / 2
          );
          this.tooltipPosition = {
            left: `${left}px`,
            top: `${top}px`,
          };
        } else if (intersects[0].object.content.showTitle) {
          let left = Math.round(
            elementWidth * position.x +
              elementWidth -
              this.$refs.titleBox.clientWidth / 2
          );
          let top = Math.round(-elementHeight * position.y + elementHeight);
          this.titlePosition = {
            left: `${left}px`,
            top: `${top}px`,
          };
        }
      } else {
        this.handleTooltipHide(e);
      }
    },
    handleTooltipHide(e) {
      e.preventDefault();
      this.tooltipPosition = {
        top: "-100%",
        left: "-100%",
      };
      this.titlePosition = {
        top: "-100%",
        left: "-100%",
      };
      this.tooltopContent = {};
    },
  },
  mounted() {
    let element = this.$refs.threeDBox;
    this.initScene();
    this.initCamera(element);
    this.initControls(element);
    this.initContent();
    this.addTipsSprite();
    this.initRenderer(element);
    this.render();
    window.addEventListener("resize", this.onResize, false);
    window.addEventListener("click", this.onMouseClick, false);
    this.renderer.domElement.addEventListener(
      "mousemove",
      this.onMousemove,
      false
    );
    this.$refs.tooltipBox.addEventListener(
      "mouseleave",
      this.handleTooltipHide,
      false
    );
  },
  destroyed() {
    cancelAnimationFrame(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .view-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .title-text {
    position: absolute;
    width: 66px;
    color: #382129;
  }
  .tooltip-box {
    position: absolute;
    padding: 0px 0px 40px 0px;
    line-height: 30px;
    border-radius: 4px;
    color: #ffffff;
    z-index: 100;
    cursor: pointer;
    .container {
      position: relative;
      width: 240px;
      max-height: 200px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.6);
      // &::before {
      //   content: "";
      //   position: absolute;
      //   bottom: -16px;
      //   left: 20%;
      //   border-top: 16px solid rgba(0, 0, 0, 0.8);
      //   border-left: 10px solid transparent;
      //   border-right: 10px solid transparent;
      // }
      .title {
        width: 100%;
        padding: 6px 0;
      }
      .explain {
        width: 100%;
        max-height: 100px;
        font-size: 14px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        &::-webkit-scrollbar-track {
          background: #353535;
          border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb {
          background: #cdcdcd;
          border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #9c9c9c;
        }
        &::-webkit-scrollbar-corner {
          background: #f6f6f6;
        }
      }
    }
  }
}
</style>
