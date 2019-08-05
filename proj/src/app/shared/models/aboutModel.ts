export class AboutModel {
  //id карточки
  id?: number
  //Заголовок
  title: string;
  // теги
  tags?: string[];
  // описание 
  description?: string;

  constructor() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.tags = [];
  }
}

