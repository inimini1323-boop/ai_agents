
import { SkinType, CosmeticProduct } from './types';

export const SKIN_TYPE_DETAILS = {
  [SkinType.OILY]: {
    label: '脂性肌',
    description: 'テカリやベタつきが気になるタイプ',
    icon: '✨',
    color: 'bg-blue-100 border-blue-200 text-blue-600',
  },
  [SkinType.COMBINATION]: {
    label: '混合肌',
    description: '部分的に乾燥し、部分的に脂っぽいタイプ',
    icon: '💧',
    color: 'bg-purple-100 border-purple-200 text-purple-600',
  },
  [SkinType.DRY]: {
    label: '乾燥肌',
    description: '全体的にカサつきやツッパリが気になるタイプ',
    icon: '🌸',
    color: 'bg-pink-100 border-pink-200 text-pink-600',
  }
};

export const PRODUCT_MAPPING: Record<SkinType, CosmeticProduct> = {
  [SkinType.OILY]: {
    id: 'A',
    name: 'バランシング スキンケア',
    brand: 'Oily Care Spec',
    description: 'テカリを抑えて、一日中サラサラな肌をキープ。毛穴の目立ちにくい滑らかな肌へ導きます。',
    imageUrl: 'https://picsum.photos/seed/oily/600/600',
    linkUrl: 'https://www.cosme.net/products/10272213/',
    features: ['皮脂コントロール', '毛穴ケア', 'さっぱり仕上げ']
  },
  [SkinType.COMBINATION]: {
    id: 'B',
    name: 'ハイドレーティング セラム',
    brand: 'Hybrid Glow',
    description: 'TゾーンのテカリとUゾーンの乾燥、どちらもケア。理想的な水分と油分のバランスを整えます。',
    imageUrl: 'https://picsum.photos/seed/combo/600/600',
    linkUrl: 'https://www.cosme.net/products/10243030/',
    features: ['水分補給', 'バリア機能サポート', 'みずみずしい質感']
  },
  [SkinType.DRY]: {
    id: 'C',
    name: 'ウルトラ モイスチャー クリーム',
    brand: 'Dewy Rich',
    description: '深刻な乾燥から肌を守り、内側からふっくらとしたハリを与えます。贅沢な保湿感でツヤ肌へ。',
    imageUrl: 'https://picsum.photos/seed/dry/600/600',
    linkUrl: 'https://www.cosme.net/products/10242325/',
    features: ['高保湿', 'ハリ・弾力', 'リッチな質感']
  }
};
