Meteor Logentries
===

This is just a wrapper for using [Logentries](https://logentries.com) with Meteor on both client and server.

# CURRENTLY ON ALPHA

If you want to improve it, feel free to send a pull request.

## Usage

On server, create the global var `le_meteor`
```javascript
le_meteor = logentries.logger({
  token: 'YOUR_TOKEN_HERE'
});
```

Now use the log variable anywhere (client or server):

```javascript
log.log('info', 'Worked!');
```

## Example

```bash
    git clone https://github.com/gabrielhpugliese/meteor-logentries.git
    cd meteor-logentries/example-app
```

Now, edit the `example-app.js` with your token and then run `meteor`. Go to logentries and see magic happening.
