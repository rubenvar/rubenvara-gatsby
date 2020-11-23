import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// display year only if it's not current year
export function formatDate(string) {
  const date = new Date(string);
  const dateFormat =
    date.getFullYear() === new Date().getFullYear()
      ? `d 'de' MMMM`
      : `d 'de' MMMM, yyyy`;

  return format(date, dateFormat, { locale: es });
}
