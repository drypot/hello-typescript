
//type JSONObject1 = null | string | boolean | number | JSONObject1[] | Record<string, JSONObject1>

export type JSONObject2 =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JSONObject2 }
  | JSONObject2[]

type JSONObject3 =
  | string
  | number
  | boolean
  | null
  | Partial<{ [key: string]: JSONObject3 }>
  | JSONObject3[]
