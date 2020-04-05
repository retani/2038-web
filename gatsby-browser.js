/*import { AuthorsField } from "./src/fields/authors"

export const onClientEntry = () => {
  window.tinacms.fields.add({
    name: "authors",
    Component: AuthorsField,
  })
}
*/

  
import TinaCMSFileField from 'tinacms-file-field'

export const onClientEntry = () => {
  const fileField = new TinaCMSFileField(window.tinacms);
  fileField.install();
}