// 此处代码做了什么：
// 包含5大类基础类型接口
// 并设置了必选的枚举属性
// 通过继承枚举属性，完成最终完善所需的二代TS接口类型

// 文本变量接口
export interface ITextVariable {
  name: string;
  label: string;
  text: string; 
}

// 数值变量接口
export interface INumberVariable {
  name: string;
  label: string;  
  value: number;
  max: number;
  min: number;
}

// 开关变量接口
export interface ISwitchVariable {
  name: string;
  label: string;
  switch: boolean; 
}

// 状态变量接口
export interface ILightVariable {
  name: string;
  label: string;
  status: string; // 可限定为更具体的状态类型
} 

// ?:二进制变量接口  
export interface IBlobVariable {
  name: string;
  label: string;
  size: string; // 可用更严格的类型如number
}

// 枚举：必选权限类型
export enum PermissionType {
  ReadOnly = 'ReadOnly', 
  WriteOnly = 'WriteOnly',
  ReadWrite = 'ReadWrite' 
}

// 通用：变量基类接口
export interface IVariableBase {
  // 优化掉了，不需要重复
  // name: string;
  // label: string;
  permission: PermissionType; 
}

// 继承：变量接口继承基类接口，接下来为每个基础接口🥛添加必选权限类型
export interface ITextVariable extends IVariableBase {
  //  keeping text definition  
}
export interface INumberVariable extends IVariableBase {
  //  keeping number definition  
}
export interface ISwitchVariable extends IVariableBase {
  //  keeping switch definition  
}
export interface ILightVariable extends IVariableBase {
  //  keeping light definition  
}
export interface IBlobVariable extends IVariableBase {
  //  keeping blob definition  
}




