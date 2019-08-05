export class AboutModel {
  // id карточки
  id?: number;
  // Заголовок
  title: string;
  // теги
  tags?: string[];
  // Описание
  description?: string;

  constructor() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.tags = [];
  }

  logo(id: number) {
    return `/about/${id}/logo`;
  }
}
