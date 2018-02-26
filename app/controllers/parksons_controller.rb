class ParksonsController < ApplicationController
  before_action :set_parkson, only: [:show, :edit, :update, :destroy]

  # GET /parksons
  # GET /parksons.json
  def index
    @parksons = Parkson.all
  end

  # GET /parksons/1
  # GET /parksons/1.json
  def show
  end

  # GET /parksons/new
  def new
    @parkson = Parkson.new
  end

  # GET /parksons/1/edit
  def edit
  end

  # POST /parksons
  # POST /parksons.json
  def create
    @parkson = Parkson.new(parkson_params)

    respond_to do |format|
      if @parkson.save
        format.html { redirect_to @parkson, notice: 'Parkson was successfully created.' }
        format.json { render :show, status: :created, location: @parkson }
      else
        format.html { render :new }
        format.json { render json: @parkson.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /parksons/1
  # PATCH/PUT /parksons/1.json
  def update
    respond_to do |format|
      if @parkson.update(parkson_params)
        format.html { redirect_to @parkson, notice: 'Parkson was successfully updated.' }
        format.json { render :show, status: :ok, location: @parkson }
      else
        format.html { render :edit }
        format.json { render json: @parkson.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /parksons/1
  # DELETE /parksons/1.json
  def destroy
    @parkson.destroy
    respond_to do |format|
      format.html { redirect_to parksons_url, notice: 'Parkson was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_parkson
      @parkson = Parkson.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def parkson_params
      params.fetch(:parkson, {})
    end
end
