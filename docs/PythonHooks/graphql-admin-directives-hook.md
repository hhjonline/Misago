# `graphql_admin_directives_hook`

`dict` of [`SchemaDirectiveVisitor`](https://ariadnegraphql.org/docs/api-reference#schemadirectivevisitor) sub-types that should be added to admin GraphQL API.

See Ariadne [Schema Directives](https://ariadnegraphql.org/docs/schema-directives) documentation for examples.

> **Note:** Plugin adding directive to the GraphQL API should also use the `graphql_admin)type_defs_hook` to add custom directive definition to GraphQL schema.


## Example

```python
from ariadne import SchemaDirectiveVisitor
from misago.hooks import graphql_admin_directives_hook


class MyDirective(SchemaDirectiveVisitor):
    ...


graphql_admin_directives_hook["myDirective"] = MyDirective
```