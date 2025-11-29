type HomeSlideType = 'standard' | 'account' | 'summary'

interface BaseSlide {
  id: number
  type: HomeSlideType
  title?: string
}

export interface StandardSlide extends BaseSlide {
  type: 'standard'
  subtitle: string
  buttonLabel: string
  categories?: string[]
  patches?: string[]
}

export interface SummarySlide extends BaseSlide {
  type: 'summary'
  curre: string
  totalValue: string
  changeLabel?: string
}

export interface AccountSlide extends BaseSlide {
  type: 'account'
  totalValue: string
  Iban: string
}
