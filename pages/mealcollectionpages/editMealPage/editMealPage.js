/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {


    Router.route('/meals/:_id/edit', function() {

        //we must subscribe to the meal we are showing!!!
        this.subscribe('meal', this.params._id);

        //now let's query that meal
        var meal = Meals.findOne({_id: this.params._id});

        //then set it as the 'this' object on the page
        this.render('editMealPage', {data: meal});
    });

    //after they insert a new meal, redirect back to
    //list of meals

    //'insertMeal' is the id of the quickform we
    //and 'updateMeal' are the id's of the quickforms
    //we want to listen to, not the name of the page level templates
    AutoForm.addHooks('updateMeal', {

        //the onSuccess method gets called after
        //a successful submit on either of the forms
        onSuccess: function(formType, result) {

            //this.docId is the _id of the document
            //the form just changed, so we will
            //load the url of that item and show the user
            //the result
            Router.go('/meals/' + this.docId);
        }
    });

}