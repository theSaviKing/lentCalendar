from flask import Flask, render_template, url_for, session, request, abort
from waitress import serve
import logging
import json as j

logger = logging.getLogger('waitress')
logger.setLevel(logging.INFO)

r = {}
def db_init():
    global r
    r = "x";
    with open('reflections.json') as file:
        r = j.load(file)
db_init()
def update_db(data):
    with open('reflections.json', 'w') as file:
        file.write(j.dumps(data, indent=4))
    db_init()

app = Flask('app')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/week/<int:week>/day/<int:day>', methods=['GET','POST'])
def get_reflection(week, day):
    if r['week'][str(week)][day-1]:
        ref = r['week'][str(week)][day-1]
        return render_template('reflection.html', reflection=ref, week=week, day=day)
    else:
        abort(404)

@app.route('/easter')
def easter():
    return render_template('easter.html')

@app.route('/insert', methods=['GET','POST'])
def insert():
    if request.method == "POST":
        r['week'][str(request.form['week'])][int(request.form['day'])-1].update(request.form)
        update_db(r)
    return render_template('insert.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', refer=(request.referrer if request.referrer else "")), 404

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=8080)