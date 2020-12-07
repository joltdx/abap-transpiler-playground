INTERFACE zif_playground_joltdx
  PUBLIC.

  METHODS rocknroll
    IMPORTING
      !input        TYPE string
    RETURNING
      VALUE(output) TYPE string .
ENDINTERFACE.
