from flask import Flask, request, render_template
import pickle
import base64

app = Flask(__name__, template_folder='templates')
real_flag = ''
with open('/flag.txt') as flag_file:
    real_flag = flag_file.read().strip()

class Profile:
    def __init__(self, username, email, bio):
        self.username = username
        self.email = email
        self.bio = bio

@app.route('/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        bio = request.form.get('bio')

        if username and email and bio:
            profile = Profile(username, email, bio)
            dumped = base64.b64encode(pickle.dumps(profile)).decode()
            return render_template('profile.html', profile=profile, dumped=dumped)    

    load_object = request.args.get('load_object')
    if load_object:
        try:
            profile = pickle.loads(base64.b64decode(load_object))
            return render_template('profile.html', profile=profile, dumped=load_object)
        except pickle.UnpicklingError as e:
            return f"Error loading profile: {str(e)}", 400

    return render_template('input.html')

@app.route('/submit_flag/<flag>', methods=['GET'])
def flag(flag):
    return real_flag if flag == real_flag else 'Not correct!'

if __name__ == '__main__':
    app.run(debug=True)
