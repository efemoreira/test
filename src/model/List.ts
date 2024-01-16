interface Node {
  id: string;
  events: Event[];
  children?: Node[];
}
