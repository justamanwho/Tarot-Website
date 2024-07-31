from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'alina.kostiuk_webpage1key'


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/jojo-reference', methods=['GET'])
def jojo_reference():
    return '<img src="../static/jolyne.png" alt="Jolyne">'


if __name__ == '__main__':
    app.run(debug=True)
