/**
 * GET    => BUSCAR INFORMAÇÕES
 * PUT    => INSETRIR (CRIAR) UMA INFORMAÇÃO
 * PUT    => ALTERAR UMA INFORMAÇÃO
 * DELETE => REMOVER DADO
 * PATCH  => ALTERAR UMA INFORMAÇÃO ESPECIFICA
 */

/**
 * Tipos de parametros:
 * Router Params => http://localhost:3000/198070987
 * Query Parms => http://localhost:3000/produtos?name=teclado&description=tecladobom&
 * 
 * Body Params =>{
 *  "name": "telcado",
 *  "description": "teclado bom" 
 * }
 */


 Caminho de uma requisição

 - server -> routes -> controller(request/response) -> service (validações) -> Repositories -> BD 


MIGRATIONS
    - Histórico das tabelas (alterações)

ENTITIES
    - Entidade que representa a tabela no banco de dados (colunas, identificador)

JTW (JSON Web Tokens)
    - PADRÃO DE TOKEN
    - É divido em 3 partes:
        1 - Header : Algoritimo de criptografica, Tipo de token. 
            "alg": "HS256",
            "typ": "JWT"
        2 - Payload (DATA) - Informações que queremos passar, podendo passar tambem o tempo de expiração do token.
            obs: Por mais que seja criptografado, por boa pratica não(evitar) passar dados sensiveis, senhas por exemplo
            {
                "sup": "1321321",
                "name": "juan",
                "iat": "2112"
            }
        3 - Verify Signature - passar uma chave unica para gerar o token.