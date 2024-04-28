export const generateLayout = (layout: number) => {
    switch (layout) {
      case 1:
        return 'grid grid-cols-1 gap-x-8 gap-y-12';
      case 5:
        return 'grid grid-cols-5 gap-x-8 gap-y-12';
      default:
        return 'grid grid-cols-2 gap-8 sm:gap-20';
    }
  }