
# ng-bootstrap

  Angular bootstrapper - take a template, inject into the page, and bootstrap the app

## Installation

  Install with [component(1)](http://component.io):

    $ component install familyfound/ng-bootstrap

## API

### bootstrap(template, parentDiv, app, placement)

    template:
     - either the string of html, or an element which will be used
    parentDiv: selector OR element
    app: string or list - passed to angular.boostrap
    placement:
     - int: index at which to insert
     - "first": at the start
     - "last": append
     - el: before this element

### bootstrap.append(template, parentDiv, app)

placement = "last"

### bootstrap.first(template, parentDiv, app)

placement = "first"


## License

  MIT
