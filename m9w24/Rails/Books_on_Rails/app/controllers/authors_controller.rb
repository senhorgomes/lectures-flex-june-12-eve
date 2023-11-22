class AuthorsController < ApplicationController
    # display all authors in the form of json
    def index
        @authors = Author.all
        # render json: @authors
    end

end
