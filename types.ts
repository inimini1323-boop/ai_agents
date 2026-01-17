
export enum SkinType {
  OILY = '脂性肌',
  COMBINATION = '混合肌',
  DRY = '乾燥肌'
}

export interface CosmeticProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  features: string[];
}

export interface DiagnosisResult {
  skinType: SkinType;
  product: CosmeticProduct;
  aiTip: string;
}
