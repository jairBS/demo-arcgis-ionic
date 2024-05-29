"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6338],{59598:(bt,N,r)=>{r.d(N,{A:()=>Pt});var $,e=r(8189),d=r(71065),R=r(77806),i=r(85211),lt=r(48669),l=r(17221),o=r(76576),a=r(50305);r(3248),r(35150),r(40707);let v=$=class extends d.oY{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new $({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],v.prototype,"expression",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,e._)([(0,i.MZ)({type:["boolean","date","number","string"],json:{write:!0}})],v.prototype,"returnType",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=$=(0,e._)([(0,o.$)("esri.form.ExpressionInfo")],v);const Et=v;let M=class extends d.oY{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],M.prototype,"description",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],M.prototype,"label",void 0),(0,e._)([(0,i.MZ)()],M.prototype,"type",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],M.prototype,"visibilityExpression",void 0),M=(0,e._)([(0,o.$)("esri.form.elements.Element")],M);const f=M;var P,gt=r(55739);let V=P=class extends d.oY{constructor(t){super(t),this.type=null}clone(){return new P({type:this.type})}};(0,e._)([(0,i.MZ)({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],V.prototype,"type",void 0),V=P=(0,e._)([(0,o.$)("esri.form.elements.inputs.AttachmentInput")],V);const Zt=V;var F;let b=F=class extends f{constructor(t){super(t),this.attachmentKeyword=null,this.editableExpression=null,this.input=null,this.type="attachment"}clone(){return new F({attachmentKeyword:this.attachmentKeyword,description:this.description,editableExpression:this.editableExpression,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],b.prototype,"attachmentKeyword",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],b.prototype,"editableExpression",void 0),(0,e._)([(0,i.MZ)({type:Zt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],b.prototype,"input",void 0),(0,e._)([(0,i.MZ)({type:["attachment"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=F=(0,e._)([(0,o.$)("esri.form.elements.AttachmentElement")],b);const at=b;let k=class extends d.oY{constructor(t){super(t),this.type=null}};(0,e._)([(0,i.MZ)()],k.prototype,"type",void 0),k=(0,e._)([(0,o.$)("esri.form.elements.inputs.Input")],k);const x=k;let I=class extends x{constructor(t){super(t),this.maxLength=null,this.minLength=0}};(0,e._)([(0,i.MZ)({type:Number,json:{write:!0}})],I.prototype,"maxLength",void 0),(0,e._)([(0,i.MZ)({type:Number,json:{write:!0}})],I.prototype,"minLength",void 0),I=(0,e._)([(0,o.$)("esri.form.elements.inputs.TextInput")],I);const D=I;var K;let O=K=class extends D{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new K({maxLength:this.maxLength,minLength:this.minLength})}};(0,e._)([(0,i.MZ)({type:["barcode-scanner"],json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=K=(0,e._)([(0,o.$)("esri.form.elements.inputs.BarcodeScannerInput")],O);const jt=O;var A;let E=A=class extends x{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new A({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],E.prototype,"noValueOptionLabel",void 0),(0,e._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"showNoValueOption",void 0),(0,e._)([(0,i.MZ)({type:["combo-box"],json:{read:!1,write:!0}})],E.prototype,"type",void 0),E=A=(0,e._)([(0,o.$)("esri.form.elements.inputs.ComboBoxInput")],E);const Tt=E;var W;function ut(t){return null!=t?t:null}function mt(t){return null!=t?t:null}let c=W=class extends x{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,n){return ut(n.max)}writeMax(t,n){n.max=mt(t)}readMin(t,n){return ut(n.min)}writeMin(t,n){n.min=mt(t)}clone(){return new W({max:this.max,min:this.min})}};(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],c.prototype,"max",void 0),(0,e._)([(0,l.w)("max")],c.prototype,"readMax",null),(0,e._)([(0,a.K)("max")],c.prototype,"writeMax",null),(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],c.prototype,"min",void 0),(0,e._)([(0,l.w)("min")],c.prototype,"readMin",null),(0,e._)([(0,a.K)("min")],c.prototype,"writeMin",null),(0,e._)([(0,i.MZ)({type:["date-picker"],json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=W=(0,e._)([(0,o.$)("esri.form.elements.inputs.DatePickerInput")],c);const It=c;var C;function G(t){return null!=t?t:null}function Y(t){return null!=t?t:null}let s=C=class extends x{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,n){return G(n.max)}writeMax(t,n){n.max=Y(t)}readMin(t,n){return G(n.min)}writeMin(t,n){n.min=Y(t)}readTimeResolution(t,n){return G(n.timeResolution)}writeTimeResolution(t,n){n.timeResolution=Y(t)}clone(){return new C({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,e._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],s.prototype,"includeTimeOffset",void 0),(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],s.prototype,"max",void 0),(0,e._)([(0,l.w)("max")],s.prototype,"readMax",null),(0,e._)([(0,a.K)("max")],s.prototype,"writeMax",null),(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],s.prototype,"min",void 0),(0,e._)([(0,l.w)("min")],s.prototype,"readMin",null),(0,e._)([(0,a.K)("min")],s.prototype,"writeMin",null),(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],s.prototype,"timeResolution",void 0),(0,e._)([(0,l.w)("timeResolution")],s.prototype,"readTimeResolution",null),(0,e._)([(0,a.K)("timeResolution")],s.prototype,"writeTimeResolution",null),(0,e._)([(0,i.MZ)({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=C=(0,e._)([(0,o.$)("esri.form.elements.inputs.DateTimeOffsetPickerInput")],s);const St=s;var H;function yt(t){return null!=t?new Date(t):null}function dt(t){return t?t.getTime():null}let m=H=class extends x{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,n){return yt(n.max)}writeMax(t,n){n.max=dt(t)}readMin(t,n){return yt(n.min)}writeMin(t,n){n.min=dt(t)}clone(){return new H({includeTime:this.includeTime,max:this.max,min:this.min})}};(0,e._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"includeTime",void 0),(0,e._)([(0,i.MZ)({type:Date,json:{type:Number,write:!0}})],m.prototype,"max",void 0),(0,e._)([(0,l.w)("max")],m.prototype,"readMax",null),(0,e._)([(0,a.K)("max")],m.prototype,"writeMax",null),(0,e._)([(0,i.MZ)({type:Date,json:{type:Number,write:!0}})],m.prototype,"min",void 0),(0,e._)([(0,l.w)("min")],m.prototype,"readMin",null),(0,e._)([(0,a.K)("min")],m.prototype,"writeMin",null),(0,e._)([(0,i.MZ)({type:["datetime-picker"],json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=H=(0,e._)([(0,o.$)("esri.form.elements.inputs.DateTimePickerInput")],m);const Rt=m;var J;let g=J=class extends x{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new J({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],g.prototype,"noValueOptionLabel",void 0),(0,e._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"showNoValueOption",void 0),(0,e._)([(0,i.MZ)({type:["radio-buttons"],json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=J=(0,e._)([(0,o.$)("esri.form.elements.inputs.RadioButtonsInput")],g);const Vt=g;var X;let Z=X=class extends x{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new X({offValue:this.offValue,onValue:this.onValue})}};(0,e._)([(0,i.MZ)({type:[String,Number],json:{write:!0}})],Z.prototype,"offValue",void 0),(0,e._)([(0,i.MZ)({type:[String,Number],json:{write:!0}})],Z.prototype,"onValue",void 0),(0,e._)([(0,i.MZ)({type:["switch"],json:{read:!1,write:!0}})],Z.prototype,"type",void 0),Z=X=(0,e._)([(0,o.$)("esri.form.elements.inputs.SwitchInput")],Z);const kt=Z;var z;let B=z=class extends D{constructor(t){super(t),this.type="text-area"}clone(){return new z({maxLength:this.maxLength,minLength:this.minLength})}};(0,e._)([(0,i.MZ)({type:["text-area"],json:{read:!1,write:!0}})],B.prototype,"type",void 0),B=z=(0,e._)([(0,o.$)("esri.form.elements.inputs.TextAreaInput")],B);const Ot=B;var Q;let L=Q=class extends D{constructor(t){super(t),this.type="text-box"}clone(){return new Q({maxLength:this.maxLength,minLength:this.minLength})}};(0,e._)([(0,i.MZ)({type:["text-box"],json:{read:!1,write:!0}})],L.prototype,"type",void 0),L=Q=(0,e._)([(0,o.$)("esri.form.elements.inputs.TextBoxInput")],L);const Bt=L;var U;function q(t){return null!=t?t:null}function tt(t){return null!=t?t:null}let p=U=class extends x{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,n){return q(n.max)}writeMax(t,n){n.max=tt(t)}readMin(t,n){return q(n.min)}writeMin(t,n){n.min=tt(t)}readTimeResolution(t,n){return q(n.timeResolution)}writeTimeResolution(t,n){n.timeResolution=tt(t)}clone(){return new U({max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],p.prototype,"max",void 0),(0,e._)([(0,l.w)("max")],p.prototype,"readMax",null),(0,e._)([(0,a.K)("max")],p.prototype,"writeMax",null),(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],p.prototype,"min",void 0),(0,e._)([(0,l.w)("min")],p.prototype,"readMin",null),(0,e._)([(0,a.K)("min")],p.prototype,"writeMin",null),(0,e._)([(0,i.MZ)({type:String,json:{type:String,write:!0}})],p.prototype,"timeResolution",void 0),(0,e._)([(0,l.w)("timeResolution")],p.prototype,"readTimeResolution",null),(0,e._)([(0,a.K)("timeResolution")],p.prototype,"writeTimeResolution",null),(0,e._)([(0,i.MZ)({type:["time-picker"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=U=(0,e._)([(0,o.$)("esri.form.elements.inputs.TimePickerInput")],p);const Lt={base:x,key:"type",typeMap:{"barcode-scanner":jt,"combo-box":Tt,"date-picker":It,"datetime-picker":Rt,"datetimeoffset-picker":St,"radio-buttons":Vt,switch:kt,"text-area":Ot,"text-box":Bt,"time-picker":p}};var et,ct=r(84546);let u=et=class extends f{constructor(t){super(t),this.domain=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}get editable(){var t;return null===(t=this._get("editable"))||void 0===t||t}set editable(t){this._set("editable",t)}clone(){return new et({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};(0,e._)([(0,i.MZ)({types:ct.gK,json:{read:{reader:ct.rS},write:!0}})],u.prototype,"domain",void 0),(0,e._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],u.prototype,"editable",null),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],u.prototype,"editableExpression",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],u.prototype,"fieldName",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],u.prototype,"hint",void 0),(0,e._)([(0,i.MZ)({types:Lt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],u.prototype,"input",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],u.prototype,"requiredExpression",void 0),(0,e._)([(0,i.MZ)({type:String,json:{read:!1,write:!0}})],u.prototype,"type",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),u=et=(0,e._)([(0,o.$)("esri.form.elements.FieldElement")],u);const ht=u;var it,Nt=r(61852);let w=it=class extends f{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new it({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:(0,R.o8)(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};(0,e._)([(0,i.MZ)({type:Number,json:{write:!0}})],w.prototype,"displayCount",void 0),(0,e._)([(0,i.MZ)({type:["list"],json:{write:!0}})],w.prototype,"displayType",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],w.prototype,"editableExpression",void 0),(0,e._)([(0,i.MZ)({type:[Nt.A],json:{write:!0}})],w.prototype,"orderByFields",void 0),(0,e._)([(0,i.MZ)({type:Number,json:{write:!0}})],w.prototype,"relationshipId",void 0),(0,e._)([(0,i.MZ)({type:["relationship"],json:{read:!1,write:!0}})],w.prototype,"type",void 0),w=it=(0,e._)([(0,o.$)("esri.form.elements.RelationshipElement")],w);const xt=w;var nt;let j=nt=class extends f{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new nt({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],j.prototype,"text",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],j.prototype,"textFormat",void 0),(0,e._)([(0,i.MZ)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],j.prototype,"type",void 0),j=nt=(0,e._)([(0,o.$)("esri.form.elements.TextElement")],j);const wt=j;function _t(t){return{typesWithGroup:{base:f,key:"type",typeMap:{attachment:at,field:ht,group:t,relationship:xt,text:wt}},typesWithoutGroup:{base:f,key:"type",typeMap:{attachment:at,field:ht,relationship:xt,text:wt}}}}function vt(t,n,S=!0){if(!t)return null;const T=S?n.typesWithGroup.typeMap:n.typesWithoutGroup.typeMap;return t.filter(_=>T[_.type]).map(_=>T[_.type].fromJSON(_))}function Mt(t,n,S=!0){if(!t)return null;const T=S?n.typesWithGroup.typeMap:n.typesWithoutGroup.typeMap;return t.filter(_=>T[_.type]).map(_=>_.toJSON())}function ft(t,n,S=!0){return t?t.map(T=>(0,gt.aq)(S?n.typesWithGroup:n.typesWithoutGroup,T)):null}var ot;let h=ot=class extends f{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return ft(t,rt,!1)}readElements(t,n){return vt(n.formElements,rt,!1)}writeElements(t,n){n.formElements=Mt(t,rt,!1)}clone(){return new ot({description:this.description,elements:(0,R.o8)(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,e._)([(0,i.MZ)({json:{write:!0}})],h.prototype,"elements",void 0),(0,e._)([(0,lt.w)("elements")],h.prototype,"castElements",null),(0,e._)([(0,l.w)("elements",["formElements"])],h.prototype,"readElements",null),(0,e._)([(0,a.K)("elements")],h.prototype,"writeElements",null),(0,e._)([(0,i.MZ)({type:["collapsed","expanded"],json:{write:!0}})],h.prototype,"initialState",void 0),(0,e._)([(0,i.MZ)({type:String,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=ot=(0,e._)([(0,o.$)("esri.form.elements.GroupElement")],h);const rt=_t(h);var st;const pt=_t(h);let y=st=class extends d.oY{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return ft(t,pt)}readElements(t,n){return vt(n.formElements,pt)}writeElements(t,n){n.formElements=Mt(t,pt)}clone(){return new st({description:this.description,expressionInfos:(0,R.o8)(this.expressionInfos),elements:(0,R.o8)(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}};(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,e._)([(0,i.MZ)({json:{write:!0}})],y.prototype,"elements",void 0),(0,e._)([(0,lt.w)("elements")],y.prototype,"castElements",null),(0,e._)([(0,l.w)("elements",["formElements"])],y.prototype,"readElements",null),(0,e._)([(0,a.K)("elements")],y.prototype,"writeElements",null),(0,e._)([(0,i.MZ)({type:[Et],json:{write:!0}})],y.prototype,"expressionInfos",void 0),(0,e._)([(0,i.MZ)({type:Boolean,json:{default:!1,write:!0}})],y.prototype,"preserveFieldValuesWhenHidden",void 0),(0,e._)([(0,i.MZ)({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=st=(0,e._)([(0,o.$)("esri.form.FormTemplate")],y);const Pt=y},71655:(bt,N,r)=>{var e,d;r.d(N,{X:()=>e}),(d=e||(e={}))[d.SAVE=0]="SAVE",d[d.SAVE_AS=1]="SAVE_AS"}}]);