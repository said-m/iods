
/** Входные параметры методов и функций */
export type InputInterface<
  Data = unknown,
  Settings extends {
    [key: string]: any
  } | void = void,
> = Settings extends void  // проверка наличия Опции
? {
  /** Входные данные */
  data: Data;
}
: {
  /** Входные данные */
  data: Data;
  /** Опции */
  settings: Settings;
};

/** Выходные параметры методов и функций */
export type OutputInterface<
  Data = unknown,
  Settings = undefined
> = InputInterface<Data, Settings>;
