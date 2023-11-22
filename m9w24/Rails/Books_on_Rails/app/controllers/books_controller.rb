class BooksController < ApplicationController
    def index
        @books = Book.all
        # @author = Author.find(params[:author_id])
        # @books = @author.books
        # render json: @books
    end
end
