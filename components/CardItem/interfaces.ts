export interface CardItemProps
  extends Partial<{
    dataTestId?: string;
    images: any;
    id: string;
    altTitle: string;
    heading: string;
    subheading?: string;
    imageRounded?: boolean;
    type: string;
  }> {}
