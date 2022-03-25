export class Translate {
  static translate = (
    resourceObj: any,
    sentence: string,
    indexs: Array<number>,
    splitChar: string = " "
  ): string => {
    const words = sentence.split(splitChar);
    indexs.forEach((indx: number) => {
      words[indx] = resourceObj[words[indx]] || words[indx];
    });

    return words.join(splitChar);
  };

  static resources: any = {
    en: {
      RWD: "Reward",
      CSH: "Cash",
      NDM: "No more data to display",

      translate: (
        sentence: string,
        indexs: Array<number>,
        splitChar: string = " "
      ): string => {
        return this.translate(this.resources.en, sentence, indexs, splitChar);
      },
    },
    es: {
      RWD: "Recompensa",
      CSH: "Efectivo",
      NDM: "No hay más datos para mostrar",

      January: "Enero",
      February: "Febrero",
      March: "Marzo",
      April: "Abril",
      May: "Mayo",
      June: "Junio",
      July: "Mes de julio",
      August: "Agosto",
      September: "Septiembre",
      October: "Octubre",
      November: "Noviembre",
      December: "Diciembre",

      translate: (
        sentence: string,
        indexs: Array<number>,
        splitChar: string = " "
      ): string => {
        return this.translate(this.resources.es, sentence, indexs, splitChar);
      },
    },
  };
}
