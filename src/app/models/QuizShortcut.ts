/**
 * @author Michał Chrust
 * Class created to store only data needed to prepare quiz list
 */

export class QuizShortcut {
  id: number;
  quizName: string;
  category: string;

  constructor(id: number, quizName: string, category: string) {
    this.id = id;
    this.quizName = quizName;
    this.category = category;
  }
}
