module.exports = {
  200: {
    ok: true,
    msg: {
      en: 'An entity corresponding to the requested resource is sent in the response',
      es: 'La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP',
      pt: 'Estas requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP'
    },
    data: [
      {
        url: 'https://httpstatusdogs.com/200-ok',
        description:
          'In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request the response will contain an entity describing or containing the result of the action.'
      }
    ]
  },
  201: {
    ok: true,
    msg: {
      en: 'The request has been fulfilled and resulted in a new resource being created',
      es: 'La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT.',
      pt: 'A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST.'
    },
    data: [
      {
        url: 'https://httpstatusdogs.com/201-created',
        description:
          'The request has been fulfilled, resulting in the creation of a new resource.'
      }
    ]
  },
  202: {
    ok: true,
    msg: {
      en: 'The request has been accepted for processing.',
      es: 'La solicitud se ha recibido, pero aún no se ha actuado. Es una petición "Sin compromiso", lo que significa que no hay manera en HTTP que permita enviar una respuesta asíncrona que indique el resultado del procesamiento de la solicitud.',
      pt: 'A requisição foi recebida mas nenhuma ação foi tomada sobre ela. Isto é uma requisição não-comprometedora, o que significa que não há nenhuma maneira no HTTP para enviar uma resposta assíncrona indicando o resultado do processamento da solicitação.'
    },
    data: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6540479079/in/album-72157628409467125/',
        description:
          ' The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.'
      }
    ]
  },
  204: {
    ok: true,
    msg: {
      en: 'The server successfully processed the request and is not returning any content.',
      es: 'La petición se ha completado con éxito pero su respuesta no tiene ningún contenido, aunque los encabezados pueden ser útiles. El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores.',
      pt: 'Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. O user-agent pode atualizar seus cabeçalhos em cache para este recurso com os novos.'
    },
    data: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6547319943/in/album-72157628409467125/',
        description:
          'The 204 status code is usually sent out in response to a PUT, POST, or DELETE request when the REST API declines to send back any status message or representation in the response message’s body.'
      }
    ]
  },
  304: {
    ok: true,
    msg: {
      en: 'The resource has not been modified since last requested.',
      es: 'Esta es usada para propositos de "caché". Le indica al cliente que la respuesta no ha sido modificada. Entonces, el cliente puede continuar usando la misma versión almacenada en su caché.',
      pt: 'Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.'
    },
    data: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6540551929/in/album-72157628409467125/',
        description:
          ' there is no need to retransmit the resource since the client still has a previously-downloaded copy.'
      }
    ]
  },
  400: {
    ok: false,
    msg: {
      en: 'The server cannot or will not process the request due to an apparent client error',
      es: 'Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.',
      pt: 'Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.'
    },
    errors: [
      {
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkRxfR6GkCpQknCmuAjfPzVdPRQnJIxY6qGwWyhqqaDKi69qikw',
        description: 'The request cannot be fulfilled due to bad syntax'
      }
    ]
  },
  401: {
    ok: false,
    msg: {
      en: 'authentication is possible but has failed or not yet been provided',
      es: 'Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, autenticación es posible.',
      pt: 'Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.'
    },
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508023065/in/album-72157628409467125/',
        description:
          'The user does not have valid authentication credentials for the target resource.'
      }
    ]
  },
  402: {
    ok: false,
    msg: {
      en: 'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. ',
      es: 'Este código de respuesta está reservado para futuros usos. El objetivo inicial de crear este código fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no está siendo usado actualmente.',
      pt: 'Este código de resposta está reservado para uso futuro. O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento porém ele não está sendo usado atualmente.'
    },
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6513001321/in/album-72157628409467125/',
        description: 'I wish to use this code to ask for a coffee or a tip.'
      }
    ]
  },
  403: {
    ok: false,
    msg: {
      en: 'The request was valid, but the server is refusing action.',
      es: 'El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.',
      pt: 'O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.'
    },
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508023617/in/album-72157628409467125/',
        description:
          ' The user might not have the necessary permissions for a resource, or may need an account of some sort.'
      }
    ]
  },
  404: {
    ok: false,
    msg: {
      en: 'The requested resource could not be found but may be available in the future. ',
      es: 'El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.',
      pt: 'O servidor não pode encontrar o recurso solicitado. Este código de resposta talvez seja o mais famoso devido à frequência com que acontece na web.'
    },
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508022985/in/album-72157628409467125/',
        description:
          'No indication is given of whether the condition is temporary or permanent. '
      }
    ]
  },
  409: {
    ok: false,
    msg: {
      en: 'Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.',
      es: 'Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor.',
      pt: 'Esta resposta será enviada quando uma requisição conflitar com o estado atual do servidor.'
    },
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508023259/in/album-72157628409467125/',
        description: 'For example, there is a guy with that ID, and is me.'
      }
    ]
  },
  422: {
    ok: false,
    msg: {
      en: 'Request is well-formed, however, due to semantic errors it is unable to be processed. Validation errors',
      es: 'La petición estaba bien formada pero no se pudo seguir debido a errores de semántica.',
      pt: 'A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.'
    }
  },
  500: {
    ok: false,
    msg: {
      en: 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
      es: 'El servidor ha encontrado una situación que no sabe como manejarla.',
      pt: 'O servidor encontrou uma situação com a qual não sabe lidar.'
    },
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6509400855/in/album-72157628409467125/',
        description: 'The server failed to fulfill a request.'
      }
    ]
  }
}
