import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'spin-avatar',
  templateUrl: './spin-avatar.component.html',
  styleUrls: ['./spin-avatar.component.scss']
})
export class SpinAvatarComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') private canvasRef: ElementRef | undefined;

  //* Cube Properties

  @Input() public rotationSpeed = {
    x: 3,
    y: -1,
    z: 1
  };

  @Input() public size: number = 300;

  @Input() public texture: string = "/assets/download.jpg";


  //* Stage Properties

  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties (Private Properties);

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }
  private loader = new THREE.TextureLoader();
  // private geometry = new THREE.BoxGeometry(1, 1, 1);
  private geometry = new THREE.CylinderGeometry(3, 3, 0.2, 100)
  // private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });
  private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;


  /**
   *Animate the cube
   *
   * @private
   * @memberof SpinAvatarComponent
   */
  private animateCube() {
    this.cube.rotateX(this.radiant(this.rotationSpeed.x));
    this.cube.rotateY(this.radiant(this.rotationSpeed.y));
    this.cube.rotateZ(this.radiant(this.rotationSpeed.z));
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof SpinAvatarComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('black')
    this.scene.add(this.cube);
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane,
    )

    this.camera.position.z = this.cameraZ;
    this.cube.rotateX(this.radiant(90))
    this.cube.rotateY(this.radiant(90))
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof SpinAvatarComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: SpinAvatarComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }

  radiant(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  @ViewChild('hiddencontrol') private hiddencontrol: ElementRef | undefined;
  @ViewChild('valuex') private xInput: ElementRef | undefined;
  @ViewChild('valuey') private yInput: ElementRef | undefined;
  @ViewChild('valuez') private zInput: ElementRef | undefined;
  @ViewChild('stopBtn') private stopBtn: ElementRef | undefined;
  private isSpining = true;
  // avatarRightClick(e: any): void {
  //   e.preventDefault();
  //   var a: PointerEvent = e;

  //   // console.log(this.hiddencontrol?.nativeElement.getBoundingClientRect())
  //   const hiddencontrolRef = this.hiddencontrol?.nativeElement;

  //   hiddencontrolRef.style.left = String(a.x) + "px";
  //   hiddencontrolRef.style.top = String(a.y) + "px";
  //   hiddencontrolRef.style.display = 'block';

  // }

  // avatarLeftClick(): void {
  //   const hiddencontrolRef = this.hiddencontrol?.nativeElement;
  //   hiddencontrolRef.style.display = 'none';
  // }
  onChange(): void {
    var xInputRef = this.xInput?.nativeElement;
    var yInputRef = this.yInput?.nativeElement;
    var zInputRef = this.zInput?.nativeElement;
    this.rotationSpeed = {
      x: Number(xInputRef.value),
      y: Number(yInputRef.value),
      z: Number(zInputRef.value)
    }
  }

  stop(): void {
    if (this.isSpining) {
      this.rotationSpeed = { x: 0, y: 0, z: 0 }
      var stopBtnRef = this.stopBtn?.nativeElement;
      stopBtnRef.textContent = 'Play'
      this.isSpining = false;
    } else {
      this.onChange()
      var stopBtnRef = this.stopBtn?.nativeElement;
      stopBtnRef.textContent = 'Stop'
      this.isSpining = true;

    }
  }
}
