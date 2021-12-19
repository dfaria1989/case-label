/// <reference types="react-scripts" />

declare module "types" {
  export function fn(): string;
  export type CaseType = {
    _id: string,
    case: string
  }
  export type ConditionsType = {
    ICD_10: string
    ICD_10_Description: string,
    _id: string
  }
}

