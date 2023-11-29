import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemaTypes from './schemas/schema'
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  title: 'kaylasween',
  projectId: 'dc87bbon',
  dataset: 'production',
  plugins: [deskTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});