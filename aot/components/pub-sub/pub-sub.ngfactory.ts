/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../components/pub-sub/pub-sub';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../../components/pub-sub/pub-sub-service';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './producer.ngfactory';
import * as import12 from './consumer.ngfactory';
import * as import13 from '../../../components/pub-sub/producer';
import * as import14 from '../../../components/pub-sub/consumer';
export class Wrapper_PubSub {
  context:import0.PubSub;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.PubSub();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_PubSub_Host:import2.RenderComponentType = (null as any);
class _View_PubSub_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _PubSub_0_4:Wrapper_PubSub;
  __PubSubService_0_5:import4.PubSubService;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_PubSub_Host0,renderType_PubSub_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  get _PubSubService_0_5():import4.PubSubService {
    if ((this.__PubSubService_0_5 == (null as any))) { (this.__PubSubService_0_5 = new import4.PubSubService()); }
    return this.__PubSubService_0_5;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'pub-sub',import5.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PubSub0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PubSub_0_4 = new Wrapper_PubSub();
    this._appEl_0.initComponent(this._PubSub_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._PubSub_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PubSub) && (0 === requestNodeIndex))) { return this._PubSub_0_4.context; }
    if (((token === import4.PubSubService) && (0 === requestNodeIndex))) { return this._PubSubService_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PubSub_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._PubSub_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PubSub_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_PubSub_Host === (null as any))) { (renderType_PubSub_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_PubSub_Host0(viewUtils,parentInjector,declarationEl);
}
export const PubSubNgFactory:import10.ComponentFactory<import0.PubSub> = new import10.ComponentFactory<import0.PubSub>('pub-sub',viewFactory_PubSub_Host0,import0.PubSub);
const styles_PubSub:any[] = ([] as any[]);
var renderType_PubSub:import2.RenderComponentType = (null as any);
class _View_PubSub0 extends import1.AppView<import0.PubSub> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import3.AppElement;
  _Producer_3_4:import11.Wrapper_Producer;
  _text_4:any;
  _el_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import3.AppElement;
  _Consumer_8_4:import12.Wrapper_Consumer;
  _text_9:any;
  _el_10:any;
  _el_11:any;
  _text_12:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_PubSub0,renderType_PubSub,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'h1',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Pub Sub Using Observables',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_3 = import5.createRenderElement(this.renderer,parentRenderNode,'producer',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_3 = new import3.AppElement(3,(null as any),this,this._el_3);
    var compView_3:any = import11.viewFactory_Producer0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Producer_3_4 = new import11.Wrapper_Producer(this.parentInjector.get(import4.PubSubService));
    this._appEl_3.initComponent(this._Producer_3_4.context,([] as any[]),compView_3);
    compView_3.create(this._Producer_3_4.context,([] as any[]),(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_5 = import5.createRenderElement(this.renderer,parentRenderNode,'br',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._el_6 = import5.createRenderElement(this.renderer,parentRenderNode,'br',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_8 = import5.createRenderElement(this.renderer,parentRenderNode,'consumer',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_8 = new import3.AppElement(8,(null as any),this,this._el_8);
    var compView_8:any = import12.viewFactory_Consumer0(this.viewUtils,this.injector(8),this._appEl_8);
    this._Consumer_8_4 = new import12.Wrapper_Consumer(this.parentInjector.get(import4.PubSubService));
    this._appEl_8.initComponent(this._Consumer_8_4.context,([] as any[]),compView_8);
    compView_8.create(this._Consumer_8_4.context,([] as any[]),(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_10 = import5.createRenderElement(this.renderer,parentRenderNode,'h4',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._el_11 = import5.createRenderElement(this.renderer,this._el_10,'a',new import5.InlineArray2(2,'href','http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'Read more here',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._el_11,
      this._text_12
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.Producer) && (3 === requestNodeIndex))) { return this._Producer_3_4.context; }
    if (((token === import14.Consumer) && (8 === requestNodeIndex))) { return this._Consumer_8_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Producer_3_4.detectChangesInInputProps(this,this._el_3,throwOnChange);
    this._Consumer_8_4.detectChangesInInputProps(this,this._el_8,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._Producer_3_4.detectChangesInHostProps(this,this._el_3,throwOnChange);
    this._Consumer_8_4.detectChangesInHostProps(this,this._el_8,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_PubSub0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<import0.PubSub> {
  if ((renderType_PubSub === (null as any))) { (renderType_PubSub = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_PubSub,{})); }
  return new _View_PubSub0(viewUtils,parentInjector,declarationEl);
}